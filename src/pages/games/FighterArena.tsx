import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

interface Fighter {
  name: string;
  color: string;
  accentColor: string;
  speed: number;
  power: number;
  defense: number;
  specialName: string;
  specialColor: string;
}

const FIGHTERS: Fighter[] = [
  { name: "Shadow Warrior", color: "#2d1b69", accentColor: "#7c3aed", speed: 8, power: 7, defense: 6, specialName: "Shadow Strike", specialColor: "#a855f7" },
  { name: "Fire Monk", color: "#7c2d12", accentColor: "#ea580c", speed: 6, power: 9, defense: 5, specialName: "Flame Burst", specialColor: "#f97316" },
  { name: "Ice Ninja", color: "#0c4a6e", accentColor: "#0ea5e9", speed: 9, power: 6, defense: 7, specialName: "Frost Slash", specialColor: "#38bdf8" },
  { name: "Thunder Knight", color: "#713f12", accentColor: "#eab308", speed: 5, power: 8, defense: 9, specialName: "Thunder Slam", specialColor: "#facc15" },
];

type GameState = "select" | "fighting" | "roundEnd" | "matchEnd" | "tournamentEnd";

const FighterArena = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const keysRef = useRef<Set<string>>(new Set());
  const [gameState, setGameState] = useState<GameState>("select");
  const [selectedFighter, setSelectedFighter] = useState<number>(0);
  const [soundOn, setSoundOn] = useState(true);
  const [scores, setScores] = useState({ player: 0, ai: 0 });
  const [round, setRound] = useState(1);
  const [tournamentRound, setTournamentRound] = useState(1); // 1=semi, 2=final
  const [aiOpponent, setAiOpponent] = useState(1);
  const [winner, setWinner] = useState("");
  const [comboCount, setComboCount] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const gameDataRef = useRef({
    player: { x: 100, y: 280, vx: 0, vy: 0, hp: 100, maxHp: 100, special: 0, facing: 1, attacking: false, attackFrame: 0, hitCooldown: 0, blocking: false, stunned: 0 },
    ai: { x: 280, y: 280, vx: 0, vy: 0, hp: 100, maxHp: 100, special: 0, facing: -1, attacking: false, attackFrame: 0, hitCooldown: 0, blocking: false, stunned: 0, thinkTimer: 0, action: "" as string },
    particles: [] as Array<{ x: number; y: number; vx: number; vy: number; life: number; color: string; size: number }>,
    shakeTimer: 0,
    comboTimer: 0,
    comboHits: 0,
    groundY: 320,
    time: 0,
  });

  const playTone = useCallback((freq: number, dur: number, type: OscillatorType = "sine", vol = 0.2) => {
    if (!soundOn) return;
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = type;
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch {}
  }, [soundOn]);

  const addParticles = useCallback((x: number, y: number, color: string, count = 5) => {
    const d = gameDataRef.current;
    for (let i = 0; i < count; i++) {
      d.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6 - 2,
        life: 20 + Math.random() * 15,
        color,
        size: 2 + Math.random() * 4,
      });
    }
  }, []);

  const startFight = useCallback((playerIdx: number, aiIdx: number) => {
    setSelectedFighter(playerIdx);
    setAiOpponent(aiIdx);
    setScores({ player: 0, ai: 0 });
    setRound(1);
    setComboCount(0);
    const d = gameDataRef.current;
    d.player = { x: 80, y: 280, vx: 0, vy: 0, hp: 100, maxHp: 100, special: 0, facing: 1, attacking: false, attackFrame: 0, hitCooldown: 0, blocking: false, stunned: 0 };
    d.ai = { x: 300, y: 280, vx: 0, vy: 0, hp: 100, maxHp: 100, special: 0, facing: -1, attacking: false, attackFrame: 0, hitCooldown: 0, blocking: false, stunned: 0, thinkTimer: 0, action: "" };
    d.particles = [];
    d.shakeTimer = 0;
    d.comboTimer = 0;
    d.comboHits = 0;
    d.time = 0;
    setGameState("fighting");
  }, []);

  const resetRound = useCallback(() => {
    const d = gameDataRef.current;
    d.player.x = 80; d.player.y = 280; d.player.hp = 100; d.player.special = Math.min(d.player.special, 50);
    d.player.attacking = false; d.player.stunned = 0; d.player.hitCooldown = 0;
    d.ai.x = 300; d.ai.y = 280; d.ai.hp = 100; d.ai.special = Math.min(d.ai.special, 50);
    d.ai.attacking = false; d.ai.stunned = 0; d.ai.hitCooldown = 0;
    d.particles = []; d.shakeTimer = 0; d.comboHits = 0; d.comboTimer = 0; d.time = 0;
    setGameState("fighting");
  }, []);

  // Drawing
  const drawFighter = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, fighter: Fighter, facing: number, attacking: boolean, attackFrame: number, blocking: boolean, stunned: number, isPlayer: boolean) => {
    ctx.save();
    ctx.translate(x, y);

    // Shadow
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath();
    ctx.ellipse(0, 40, 20, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    const bounce = Math.sin(Date.now() / 200) * 2;
    const attackOffset = attacking ? Math.sin(attackFrame * 0.5) * facing * 15 : 0;

    if (stunned > 0) {
      ctx.translate(Math.sin(Date.now() / 50) * 3, 0);
    }

    // Body
    ctx.fillStyle = fighter.color;
    ctx.fillRect(-12, -30 + bounce, 24, 35);

    // Armor/accent
    ctx.fillStyle = fighter.accentColor;
    ctx.fillRect(-14, -20 + bounce, 28, 8);

    // Head
    ctx.fillStyle = "#fcd9b6";
    ctx.beginPath();
    ctx.arc(0, -38 + bounce, 12, 0, Math.PI * 2);
    ctx.fill();

    // Headband
    ctx.fillStyle = fighter.accentColor;
    ctx.fillRect(-13, -42 + bounce, 26, 6);

    // Eyes
    ctx.fillStyle = stunned > 0 ? "#ef4444" : "#000";
    ctx.fillRect(facing > 0 ? 2 : -7, -40 + bounce, 4, 4);

    // Arms
    ctx.fillStyle = fighter.color;
    if (attacking) {
      // Punch animation
      ctx.save();
      ctx.translate(facing * 12, -18 + bounce);
      ctx.rotate(facing * (-0.5 + attackFrame * 0.15));
      ctx.fillRect(0, -3, facing * (15 + attackFrame * 3), 6);
      ctx.fillStyle = fighter.accentColor;
      ctx.fillRect(facing * (15 + attackFrame * 3) - facing * 6, -5, 8, 10);
      ctx.restore();
    } else if (blocking) {
      ctx.fillRect(-16, -25 + bounce, 6, 20);
      ctx.fillRect(10, -25 + bounce, 6, 20);
      ctx.fillStyle = fighter.accentColor;
      ctx.fillRect(-4, -28 + bounce, 8, 24);
    } else {
      ctx.fillRect(-16, -22 + bounce, 6, 18);
      ctx.fillRect(10, -22 + bounce, 6, 18);
    }

    // Legs
    ctx.fillStyle = "#1a1a2e";
    const legSwing = Math.sin(Date.now() / 150) * (attacking ? 8 : 3);
    ctx.fillRect(-8, 5 + bounce, 7, 16);
    ctx.fillRect(1, 5 + bounce + legSwing * 0.3, 7, 16);

    // Name tag
    ctx.fillStyle = fighter.accentColor;
    ctx.font = "bold 8px monospace";
    ctx.textAlign = "center";
    ctx.fillText(isPlayer ? "YOU" : "CPU", 0, -55);

    ctx.restore();
  }, []);

  // Game loop
  useEffect(() => {
    if (gameState !== "fighting") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width;
    const H = canvas.height;
    const playerFighter = FIGHTERS[selectedFighter];
    const aiFighter = FIGHTERS[aiOpponent];
    const d = gameDataRef.current;

    const loop = () => {
      d.time++;
      const keys = keysRef.current;

      // Player input
      if (d.player.stunned <= 0) {
        if (keys.has("ArrowLeft")) { d.player.vx = -playerFighter.speed * 0.5; d.player.facing = -1; }
        else if (keys.has("ArrowRight")) { d.player.vx = playerFighter.speed * 0.5; d.player.facing = 1; }
        else d.player.vx *= 0.7;

        if (keys.has("ArrowUp") && d.player.y >= d.groundY - 42) {
          d.player.vy = -10;
        }
        d.player.blocking = keys.has("ArrowDown") && !d.player.attacking;
        if ((keys.has("a") || keys.has("A")) && !d.player.attacking && d.player.hitCooldown <= 0) {
          d.player.attacking = true;
          d.player.attackFrame = 0;
          playTone(300 + Math.random() * 200, 0.1, "square");
        }
        if ((keys.has("s") || keys.has("S")) && d.player.special >= 100 && !d.player.attacking) {
          d.player.attacking = true;
          d.player.attackFrame = 0;
          d.player.special = 0;
          addParticles(d.player.x + d.player.facing * 30, d.player.y - 10, playerFighter.specialColor, 15);
          playTone(600, 0.3, "sawtooth", 0.3);
        }
      } else {
        d.player.stunned--;
        d.player.vx *= 0.8;
      }

      // AI logic
      if (d.ai.stunned <= 0) {
        d.ai.thinkTimer--;
        if (d.ai.thinkTimer <= 0) {
          d.ai.thinkTimer = 15 + Math.random() * 25;
          const dist = Math.abs(d.ai.x - d.player.x);
          if (dist < 50 && Math.random() > 0.4) {
            d.ai.action = "attack";
          } else if (dist < 40 && Math.random() > 0.6) {
            d.ai.action = "block";
          } else if (dist > 80) {
            d.ai.action = "approach";
          } else if (Math.random() > 0.7) {
            d.ai.action = "jump";
          } else {
            d.ai.action = Math.random() > 0.5 ? "approach" : "retreat";
          }
          if (d.ai.special >= 100 && dist < 60 && Math.random() > 0.5) {
            d.ai.action = "special";
          }
        }
        d.ai.facing = d.player.x < d.ai.x ? -1 : 1;
        switch (d.ai.action) {
          case "approach": d.ai.vx = d.ai.facing * aiFighter.speed * 0.4; break;
          case "retreat": d.ai.vx = -d.ai.facing * aiFighter.speed * 0.4; break;
          case "attack":
            if (!d.ai.attacking && d.ai.hitCooldown <= 0) { d.ai.attacking = true; d.ai.attackFrame = 0; }
            d.ai.vx *= 0.5;
            break;
          case "block": d.ai.blocking = true; d.ai.vx *= 0.3; break;
          case "jump":
            if (d.ai.y >= d.groundY - 42) d.ai.vy = -9;
            d.ai.vx = d.ai.facing * aiFighter.speed * 0.3;
            break;
          case "special":
            if (!d.ai.attacking && d.ai.special >= 100) {
              d.ai.attacking = true; d.ai.attackFrame = 0; d.ai.special = 0;
              addParticles(d.ai.x + d.ai.facing * 30, d.ai.y - 10, aiFighter.specialColor, 15);
            }
            break;
          default: d.ai.vx *= 0.7;
        }
        if (d.ai.action !== "block") d.ai.blocking = false;
      } else {
        d.ai.stunned--;
        d.ai.vx *= 0.8;
      }

      // Physics
      [d.player, d.ai].forEach(f => {
        f.x += f.vx;
        f.vy += 0.6;
        f.y += f.vy;
        if (f.y > d.groundY - 2) { f.y = d.groundY - 2; f.vy = 0; }
        f.x = Math.max(20, Math.min(W - 20, f.x));
        if (f.hitCooldown > 0) f.hitCooldown--;
        if (f.attacking) {
          f.attackFrame++;
          if (f.attackFrame > 12) { f.attacking = false; f.attackFrame = 0; f.hitCooldown = 8; }
        }
      });

      // Hit detection
      const checkHit = (attacker: typeof d.player, defender: typeof d.player | typeof d.ai, atkFighter: Fighter, defFighter: Fighter) => {
        if (!attacker.attacking || attacker.attackFrame < 3 || attacker.attackFrame > 8) return;
        const dist = Math.abs(attacker.x - defender.x);
        const hitRange = 55;
        const correctSide = (defender.x - attacker.x) * attacker.facing > -10;
        if (dist < hitRange && correctSide && defender.hitCooldown <= 0) {
          let dmg = atkFighter.power * 1.5;
          const isSpecial = attacker.special === 0 && attacker.attackFrame < 5;
          if (isSpecial) dmg *= 2.5;
          if (defender.blocking) {
            dmg *= 0.2;
            addParticles(defender.x, defender.y - 15, "#94a3b8", 3);
            playTone(100, 0.1, "triangle");
          } else {
            defender.stunned = 8;
            defender.vx = attacker.facing * 5;
            d.comboHits++;
            d.comboTimer = 60;
            addParticles((attacker.x + defender.x) / 2, defender.y - 15, isSpecial ? atkFighter.specialColor : "#ef4444", isSpecial ? 12 : 6);
            playTone(isSpecial ? 800 : 400, 0.15, "square", 0.25);
            d.shakeTimer = isSpecial ? 10 : 5;
          }
          defender.hp = Math.max(0, defender.hp - dmg);
          attacker.special = Math.min(100, attacker.special + 15);
          defender.hitCooldown = 15;
        }
      };
      checkHit(d.player, d.ai, playerFighter, aiFighter);
      checkHit(d.ai as any, d.player, aiFighter, playerFighter);

      // Combo timer
      if (d.comboTimer > 0) {
        d.comboTimer--;
        if (d.comboTimer === 0) { setComboCount(d.comboHits); d.comboHits = 0; }
      }

      // Particles
      d.particles = d.particles.filter(p => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life--;
        return p.life > 0;
      });
      if (d.shakeTimer > 0) d.shakeTimer--;

      // Draw
      ctx.save();
      if (d.shakeTimer > 0) ctx.translate(Math.sin(d.time * 2) * d.shakeTimer * 0.5, Math.cos(d.time * 3) * d.shakeTimer * 0.3);

      // Background - arena
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, "#0f172a");
      grad.addColorStop(0.6, "#1e293b");
      grad.addColorStop(1, "#334155");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Ground
      ctx.fillStyle = "#475569";
      ctx.fillRect(0, d.groundY + 18, W, H - d.groundY);
      ctx.strokeStyle = "#64748b";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, d.groundY + 18); ctx.lineTo(W, d.groundY + 18); ctx.stroke();

      // Arena decorations
      ctx.fillStyle = "rgba(100,116,139,0.3)";
      for (let i = 0; i < W; i += 40) {
        ctx.fillRect(i, d.groundY + 20, 2, 30);
      }

      // Round info
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 12px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`ROUND ${round}`, W / 2, 16);
      ctx.fillText(`${tournamentRound === 1 ? "SEMI-FINAL" : "FINAL"}`, W / 2, 30);

      // Health bars
      const drawHP = (x: number, hp: number, maxHp: number, special: number, color: string, name: string, leftAlign: boolean) => {
        const bw = 140;
        const bx = leftAlign ? x : x - bw;
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(bx, 42, bw, 14);
        ctx.fillStyle = hp > 30 ? color : "#ef4444";
        ctx.fillRect(bx + 1, 43, (bw - 2) * (hp / maxHp), 12);
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(bx, 58, bw, 6);
        ctx.fillStyle = "#a855f7";
        ctx.fillRect(bx + 1, 59, (bw - 2) * (special / 100), 4);
        ctx.fillStyle = "#e2e8f0";
        ctx.font = "bold 9px monospace";
        ctx.textAlign = leftAlign ? "left" : "right";
        ctx.fillText(name, leftAlign ? bx : bx + bw, 39);
      };
      drawHP(10, d.player.hp, d.player.maxHp, d.player.special, playerFighter.accentColor, playerFighter.name, true);
      drawHP(W - 10, d.ai.hp, d.ai.maxHp, d.ai.special, aiFighter.accentColor, aiFighter.name, false);

      // Fighters
      drawFighter(ctx, d.player.x, d.player.y, playerFighter, d.player.facing, d.player.attacking, d.player.attackFrame, d.player.blocking, d.player.stunned, true);
      drawFighter(ctx, d.ai.x, d.ai.y, aiFighter, d.ai.facing, d.ai.attacking, d.ai.attackFrame, d.ai.blocking, d.ai.stunned, false);

      // Particles
      d.particles.forEach(p => {
        ctx.globalAlpha = p.life / 30;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Combo display
      if (d.comboTimer > 0 && d.comboHits > 1) {
        ctx.fillStyle = "#fbbf24";
        ctx.font = `bold ${14 + d.comboHits}px monospace`;
        ctx.textAlign = "center";
        ctx.fillText(`${d.comboHits}x COMBO!`, W / 2, 90);
      }

      // Timer
      const timeLeft = Math.max(0, 60 - Math.floor(d.time / 60));
      ctx.fillStyle = timeLeft < 10 ? "#ef4444" : "#e2e8f0";
      ctx.font = "bold 18px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`${timeLeft}`, W / 2, 80);

      ctx.restore();

      // Win check
      if (d.player.hp <= 0 || d.ai.hp <= 0 || timeLeft <= 0) {
        let playerWon: boolean;
        if (d.player.hp <= 0) playerWon = false;
        else if (d.ai.hp <= 0) playerWon = true;
        else playerWon = d.player.hp > d.ai.hp;

        if (playerWon) {
          setScores(s => ({ ...s, player: s.player + 1 }));
          playTone(523, 0.15, "square");
          setTimeout(() => playTone(784, 0.2, "square"), 150);
        } else {
          setScores(s => ({ ...s, ai: s.ai + 1 }));
          playTone(200, 0.3, "sawtooth");
        }
        setGameState("roundEnd");
        return;
      }

      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [gameState, selectedFighter, aiOpponent, round, tournamentRound, playTone, addParticles, drawFighter]);

  // Process round end
  useEffect(() => {
    if (gameState !== "roundEnd") return;
    const timer = setTimeout(() => {
      if (scores.player >= 2) {
        if (tournamentRound >= 2) {
          setWinner("player");
          setGameState("tournamentEnd");
        } else {
          setGameState("matchEnd");
        }
      } else if (scores.ai >= 2) {
        if (tournamentRound >= 2) {
          setWinner("ai");
          setGameState("tournamentEnd");
        } else {
          setGameState("matchEnd");
        }
      } else {
        setRound(r => r + 1);
        resetRound();
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [gameState, scores, tournamentRound, resetRound]);

  // Keyboard
  useEffect(() => {
    const down = (e: KeyboardEvent) => { keysRef.current.add(e.key); e.preventDefault(); };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  // Touch controls
  const handleTouch = useCallback((key: string, pressed: boolean) => {
    if (pressed) keysRef.current.add(key);
    else keysRef.current.delete(key);
  }, []);

  const TouchButton = ({ label, keyName, className = "" }: { label: string; keyName: string; className?: string }) => (
    <button
      className={`w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white font-bold text-xs flex items-center justify-center active:bg-white/30 select-none ${className}`}
      onTouchStart={(e) => { e.preventDefault(); handleTouch(keyName, true); }}
      onTouchEnd={(e) => { e.preventDefault(); handleTouch(keyName, false); }}
      onMouseDown={() => handleTouch(keyName, true)}
      onMouseUp={() => handleTouch(keyName, false)}
    >
      {label}
    </button>
  );

  if (gameState === "select") {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/game-zone")}><ArrowLeft className="h-5 w-5" /></Button>
          <h1 className="text-lg font-bold">⚔️ Fighter Arena</h1>
        </div>
        <div className="p-4 space-y-4">
          <h2 className="text-center text-xl font-bold text-primary">Choose Your Fighter</h2>
          <div className="grid grid-cols-2 gap-3">
            {FIGHTERS.map((f, i) => (
              <button
                key={i}
                onClick={() => setSelectedFighter(i)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${selectedFighter === i ? "border-primary bg-primary/10 scale-105" : "border-border bg-card hover:border-primary/50"}`}
              >
                <div className="w-12 h-12 rounded-full mb-2 flex items-center justify-center text-2xl" style={{ background: f.accentColor }}>⚔️</div>
                <h3 className="font-bold text-sm">{f.name}</h3>
                <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                  <div className="flex justify-between"><span>Speed</span><div className="flex gap-0.5">{Array(10).fill(0).map((_, j) => <div key={j} className={`w-1.5 h-2 rounded-sm ${j < f.speed ? "bg-primary" : "bg-muted"}`} />)}</div></div>
                  <div className="flex justify-between"><span>Power</span><div className="flex gap-0.5">{Array(10).fill(0).map((_, j) => <div key={j} className={`w-1.5 h-2 rounded-sm ${j < f.power ? "bg-destructive" : "bg-muted"}`} />)}</div></div>
                  <div className="flex justify-between"><span>Defense</span><div className="flex gap-0.5">{Array(10).fill(0).map((_, j) => <div key={j} className={`w-1.5 h-2 rounded-sm ${j < f.defense ? "bg-green-500" : "bg-muted"}`} />)}</div></div>
                </div>
                <p className="text-[10px] mt-1 text-primary">{f.specialName}</p>
              </button>
            ))}
          </div>
          <Button className="w-full" size="lg" onClick={() => {
            const opponents = [0,1,2,3].filter(i => i !== selectedFighter);
            startFight(selectedFighter, opponents[Math.floor(Math.random() * opponents.length)]);
          }}>
            Start Tournament ⚔️
          </Button>
          <div className="text-center text-xs text-muted-foreground space-y-1">
            <p>🎮 Arrow Keys: Move/Jump/Block</p>
            <p>A: Punch | S: Special (when bar full)</p>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (gameState === "tournamentEnd") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="text-6xl">{winner === "player" ? "🏆" : "💀"}</div>
          <h1 className="text-2xl font-bold">{winner === "player" ? "Tournament Champion!" : "Defeated!"}</h1>
          <p className="text-muted-foreground">{winner === "player" ? `${FIGHTERS[selectedFighter].name} wins the tournament!` : `Better luck next time!`}</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => setGameState("select")}>Play Again</Button>
            <Button variant="outline" onClick={() => navigate("/game-zone")}>Exit</Button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === "matchEnd") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="text-5xl">{scores.player >= 2 ? "✅" : "❌"}</div>
          <h1 className="text-xl font-bold">{scores.player >= 2 ? "Semi-Final Won!" : "Semi-Final Lost"}</h1>
          <p className="text-muted-foreground">Score: {scores.player} - {scores.ai}</p>
          <Button onClick={() => {
            if (scores.player >= 2) {
              setTournamentRound(2);
              const finalOpponents = [0,1,2,3].filter(i => i !== selectedFighter && i !== aiOpponent);
              startFight(selectedFighter, finalOpponents[Math.floor(Math.random() * finalOpponents.length)]);
            } else {
              setGameState("select");
            }
          }}>{scores.player >= 2 ? "Next: FINAL →" : "Try Again"}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      <div className="absolute top-2 left-2 z-10 flex gap-2">
        <Button variant="ghost" size="icon" className="text-white" onClick={() => { setGameState("select"); cancelAnimationFrame(animRef.current); }}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white" onClick={() => setSoundOn(!soundOn)}>
          {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </Button>
      </div>

      {gameState === "roundEnd" && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">{scores.player > scores.ai ? "Round Won!" : "Round Lost!"}</h2>
            <p className="text-lg mt-2">{scores.player} - {scores.ai}</p>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} width={400} height={380} className="w-full max-w-md border border-white/10 rounded-lg" style={{ imageRendering: "pixelated" }} />

      {/* Mobile controls */}
      <div className="flex justify-between w-full max-w-md px-4 mt-3">
        <div className="flex flex-col items-center gap-1">
          <TouchButton label="↑" keyName="ArrowUp" />
          <div className="flex gap-1">
            <TouchButton label="←" keyName="ArrowLeft" />
            <TouchButton label="↓" keyName="ArrowDown" />
            <TouchButton label="→" keyName="ArrowRight" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <TouchButton label="👊" keyName="a" className="w-14 h-14 bg-red-500/30 border-red-400/40" />
          <TouchButton label="⚡" keyName="s" className="w-14 h-14 bg-purple-500/30 border-purple-400/40" />
        </div>
      </div>
    </div>
  );
};

export default FighterArena;
