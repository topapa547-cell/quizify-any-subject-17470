import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpaceBlaster = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [wave, setWave] = useState(1);
  const [started, setStarted] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem("spaceBlasterHigh") || "0"));
  const keysRef = useRef<Set<string>>(new Set());
  const touchRef = useRef({ left: false, right: false, fire: false });
  const audioCtxRef = useRef<AudioContext | null>(null);

  const dataRef = useRef({
    player: { x: 200, y: 420, vx: 0, shooting: false, shootCd: 0, invincible: 0 },
    bullets: [] as Array<{ x: number; y: number; vy: number; power: number; color: string }>,
    enemies: [] as Array<{ x: number; y: number; vx: number; vy: number; hp: number; type: number; shootCd: number; w: number; h: number }>,
    eBullets: [] as Array<{ x: number; y: number; vy: number }>,
    particles: [] as Array<{ x: number; y: number; vx: number; vy: number; life: number; color: string; size: number }>,
    powerups: [] as Array<{ x: number; y: number; type: string }>,
    stars: Array.from({ length: 80 }, () => ({ x: Math.random() * 400, y: Math.random() * 500, speed: 0.5 + Math.random() * 2, size: Math.random() * 2 })),
    score: 0,
    lives: 3,
    wave: 1,
    waveTimer: 0,
    powerLevel: 1,
    shakeTimer: 0,
    time: 0,
    gameOver: false,
  });

  const playTone = useCallback((freq: number, dur: number, type: OscillatorType = "sine", vol = 0.15) => {
    if (!soundOn) return;
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.value = freq; osc.type = type;
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);
      osc.start(); osc.stop(ctx.currentTime + dur);
    } catch {}
  }, [soundOn]);

  const spawnWave = useCallback((waveNum: number) => {
    const d = dataRef.current;
    const count = 4 + waveNum * 2;
    for (let i = 0; i < Math.min(count, 20); i++) {
      const type = waveNum > 3 && Math.random() > 0.7 ? 2 : waveNum > 1 && Math.random() > 0.5 ? 1 : 0;
      d.enemies.push({
        x: 30 + (i % 8) * 45,
        y: -30 - Math.floor(i / 8) * 40,
        vx: (Math.random() > 0.5 ? 1 : -1) * (0.5 + waveNum * 0.1),
        vy: 0.3 + waveNum * 0.05,
        hp: type === 2 ? 4 : type === 1 ? 2 : 1,
        type,
        shootCd: 60 + Math.random() * 120,
        w: type === 2 ? 30 : 22,
        h: type === 2 ? 24 : 18,
      });
    }
  }, []);

  const startGame = useCallback(() => {
    const d = dataRef.current;
    d.player = { x: 200, y: 420, vx: 0, shooting: false, shootCd: 0, invincible: 60 };
    d.bullets = []; d.enemies = []; d.eBullets = []; d.particles = []; d.powerups = [];
    d.score = 0; d.lives = 3; d.wave = 1; d.waveTimer = 0; d.powerLevel = 1; d.shakeTimer = 0; d.time = 0; d.gameOver = false;
    setScore(0); setLives(3); setWave(1); setGameOver(false); setStarted(true);
    spawnWave(1);
  }, [spawnWave]);

  useEffect(() => {
    if (!started || gameOver) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width, H = canvas.height;
    const d = dataRef.current;

    const loop = () => {
      if (d.gameOver) return;
      d.time++;
      const keys = keysRef.current;
      const touch = touchRef.current;

      // Player movement
      if (keys.has("ArrowLeft") || touch.left) d.player.vx = -5;
      else if (keys.has("ArrowRight") || touch.right) d.player.vx = 5;
      else d.player.vx *= 0.8;
      d.player.x = Math.max(15, Math.min(W - 15, d.player.x + d.player.vx));
      if (d.player.invincible > 0) d.player.invincible--;

      // Shooting
      d.player.shootCd--;
      if ((keys.has(" ") || keys.has("ArrowUp") || touch.fire) && d.player.shootCd <= 0) {
        d.player.shootCd = d.powerLevel >= 3 ? 6 : 10;
        d.bullets.push({ x: d.player.x, y: d.player.y - 12, vy: -8, power: 1, color: "#38bdf8" });
        if (d.powerLevel >= 2) {
          d.bullets.push({ x: d.player.x - 8, y: d.player.y - 8, vy: -7, power: 1, color: "#818cf8" });
          d.bullets.push({ x: d.player.x + 8, y: d.player.y - 8, vy: -7, power: 1, color: "#818cf8" });
        }
        if (d.powerLevel >= 3) {
          d.bullets.push({ x: d.player.x - 14, y: d.player.y - 4, vy: -6, power: 1, color: "#f472b6" });
          d.bullets.push({ x: d.player.x + 14, y: d.player.y - 4, vy: -6, power: 1, color: "#f472b6" });
        }
        playTone(1200, 0.05, "square", 0.08);
      }

      // Bullets
      d.bullets = d.bullets.filter(b => { b.y += b.vy; return b.y > -10; });

      // Enemies
      d.enemies.forEach(e => {
        e.x += e.vx; e.y += e.vy;
        if (e.x < 15 || e.x > W - 15) e.vx *= -1;
        e.y = Math.min(e.y, 250);
        e.shootCd--;
        if (e.shootCd <= 0 && e.y > 0) {
          e.shootCd = 80 + Math.random() * 100;
          d.eBullets.push({ x: e.x, y: e.y + e.h / 2, vy: 3 + d.wave * 0.2 });
        }
      });

      // Enemy bullets
      d.eBullets = d.eBullets.filter(b => { b.y += b.vy; return b.y < H + 10; });

      // Bullet-enemy collision
      d.bullets = d.bullets.filter(b => {
        for (let i = d.enemies.length - 1; i >= 0; i--) {
          const e = d.enemies[i];
          if (Math.abs(b.x - e.x) < e.w / 2 + 4 && Math.abs(b.y - e.y) < e.h / 2 + 4) {
            e.hp -= b.power;
            if (e.hp <= 0) {
              const pts = (e.type + 1) * 10 * d.wave;
              d.score += pts;
              setScore(d.score);
              for (let j = 0; j < 8; j++) {
                d.particles.push({ x: e.x, y: e.y, vx: (Math.random() - 0.5) * 6, vy: (Math.random() - 0.5) * 6, life: 20, color: e.type === 2 ? "#ef4444" : e.type === 1 ? "#f59e0b" : "#22c55e", size: 3 + Math.random() * 3 });
              }
              if (Math.random() > 0.85) d.powerups.push({ x: e.x, y: e.y, type: Math.random() > 0.5 ? "power" : "life" });
              playTone(300 + e.type * 200, 0.12, "square", 0.15);
              d.enemies.splice(i, 1);
            } else {
              playTone(600, 0.05, "triangle");
            }
            return false;
          }
        }
        return true;
      });

      // Player-enemy bullet collision
      if (d.player.invincible <= 0) {
        d.eBullets = d.eBullets.filter(b => {
          if (Math.abs(b.x - d.player.x) < 12 && Math.abs(b.y - d.player.y) < 12) {
            d.lives--;
            setLives(d.lives);
            d.player.invincible = 90;
            d.shakeTimer = 10;
            d.powerLevel = Math.max(1, d.powerLevel - 1);
            playTone(100, 0.3, "sawtooth", 0.2);
            for (let j = 0; j < 10; j++) d.particles.push({ x: d.player.x, y: d.player.y, vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8, life: 25, color: "#ef4444", size: 3 });
            if (d.lives <= 0) {
              d.gameOver = true;
              if (d.score > highScore) { setHighScore(d.score); localStorage.setItem("spaceBlasterHigh", d.score.toString()); }
              setGameOver(true);
              return false;
            }
            return false;
          }
          return true;
        });
      }

      // Powerups
      d.powerups = d.powerups.filter(p => {
        p.y += 1.5;
        if (Math.abs(p.x - d.player.x) < 18 && Math.abs(p.y - d.player.y) < 18) {
          if (p.type === "power") { d.powerLevel = Math.min(3, d.powerLevel + 1); playTone(800, 0.15, "sine"); }
          else { d.lives = Math.min(5, d.lives + 1); setLives(d.lives); playTone(523, 0.1, "sine"); setTimeout(() => playTone(784, 0.15, "sine"), 100); }
          return false;
        }
        return p.y < H + 10;
      });

      // Wave check
      if (d.enemies.length === 0) {
        d.waveTimer++;
        if (d.waveTimer > 90) {
          d.wave++;
          setWave(d.wave);
          spawnWave(d.wave);
          d.waveTimer = 0;
        }
      }

      // Particles
      d.particles = d.particles.filter(p => { p.x += p.vx; p.y += p.vy; p.life--; return p.life > 0; });
      if (d.shakeTimer > 0) d.shakeTimer--;

      // Draw
      ctx.save();
      if (d.shakeTimer > 0) ctx.translate(Math.sin(d.time * 3) * d.shakeTimer * 0.5, 0);

      // BG
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, W, H);

      // Stars
      d.stars.forEach(s => {
        s.y += s.speed;
        if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
        ctx.fillStyle = `rgba(255,255,255,${0.3 + s.speed * 0.2})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      });

      // Player
      if (d.player.invincible <= 0 || d.time % 4 < 2) {
        ctx.save();
        ctx.translate(d.player.x, d.player.y);
        // Ship body
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(-12, 10);
        ctx.lineTo(-4, 6);
        ctx.lineTo(0, 12);
        ctx.lineTo(4, 6);
        ctx.lineTo(12, 10);
        ctx.closePath();
        ctx.fill();
        // Cockpit
        ctx.fillStyle = "#7dd3fc";
        ctx.beginPath(); ctx.arc(0, -2, 4, 0, Math.PI * 2); ctx.fill();
        // Engine glow
        ctx.fillStyle = `rgba(251,191,36,${0.5 + Math.sin(d.time * 0.3) * 0.3})`;
        ctx.beginPath(); ctx.arc(0, 14, 3 + Math.sin(d.time * 0.5) * 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }

      // Bullets
      d.bullets.forEach(b => {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x - 2, b.y - 4, 4, 8);
        ctx.fillStyle = `${b.color}40`;
        ctx.fillRect(b.x - 3, b.y, 6, 12);
      });

      // Enemies
      d.enemies.forEach(e => {
        if (e.y < -e.h) return;
        const colors = ["#22c55e", "#f59e0b", "#ef4444"];
        ctx.fillStyle = colors[e.type];
        // Ship shape
        ctx.beginPath();
        ctx.moveTo(e.x, e.y + e.h / 2);
        ctx.lineTo(e.x - e.w / 2, e.y - e.h / 2);
        ctx.lineTo(e.x - e.w / 4, e.y - e.h / 4);
        ctx.lineTo(e.x, e.y - e.h / 2 - 4);
        ctx.lineTo(e.x + e.w / 4, e.y - e.h / 4);
        ctx.lineTo(e.x + e.w / 2, e.y - e.h / 2);
        ctx.closePath();
        ctx.fill();
        // Eyes
        ctx.fillStyle = "#000";
        ctx.fillRect(e.x - 4, e.y - 2, 3, 3);
        ctx.fillRect(e.x + 1, e.y - 2, 3, 3);
      });

      // Enemy bullets
      ctx.fillStyle = "#f87171";
      d.eBullets.forEach(b => {
        ctx.beginPath(); ctx.arc(b.x, b.y, 3, 0, Math.PI * 2); ctx.fill();
      });

      // Powerups
      d.powerups.forEach(p => {
        ctx.fillStyle = p.type === "power" ? "#a855f7" : "#22c55e";
        ctx.beginPath(); ctx.arc(p.x, p.y, 8 + Math.sin(d.time * 0.1) * 2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = "bold 8px monospace";
        ctx.textAlign = "center";
        ctx.fillText(p.type === "power" ? "P" : "♥", p.x, p.y + 3);
      });

      // Particles
      d.particles.forEach(p => {
        ctx.globalAlpha = p.life / 25;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 1;

      // HUD
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "left";
      ctx.fillText(`Score: ${d.score}`, 10, 20);
      ctx.textAlign = "right";
      ctx.fillText(`Wave: ${d.wave}`, W - 10, 20);
      // Lives
      ctx.fillStyle = "#ef4444";
      ctx.font = "12px monospace";
      ctx.textAlign = "left";
      ctx.fillText("♥".repeat(d.lives), 10, 38);
      // Power
      ctx.fillStyle = "#a855f7";
      ctx.fillText("⚡".repeat(d.powerLevel), 10, 54);

      // Wave incoming
      if (d.enemies.length === 0 && d.waveTimer > 0) {
        ctx.fillStyle = "#fbbf24";
        ctx.font = "bold 18px monospace";
        ctx.textAlign = "center";
        ctx.fillText(`WAVE ${d.wave + 1} INCOMING`, W / 2, H / 2);
      }

      ctx.restore();
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [started, gameOver, playTone, spawnWave, highScore]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => { keysRef.current.add(e.key); if ([" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) e.preventDefault(); };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  if (!started || gameOver) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-4 text-white">
        <div className="text-center space-y-4">
          <div className="text-6xl">🚀</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Space Blaster</h1>
          {gameOver && (
            <>
              <p className="text-2xl font-bold text-amber-400">Game Over!</p>
              <p className="text-lg">Score: {score} | Wave: {wave}</p>
              <p className="text-sm text-muted-foreground">High Score: {Math.max(score, highScore)}</p>
            </>
          )}
          <div className="flex gap-3 justify-center">
            <Button onClick={startGame} size="lg" className="bg-blue-600 hover:bg-blue-500">{gameOver ? "Play Again" : "Start Game"} 🚀</Button>
            <Button variant="outline" onClick={() => navigate("/game-zone")}>Exit</Button>
          </div>
          <div className="text-xs text-gray-400 space-y-1 mt-4">
            <p>← → : Move | ↑ or Space : Shoot</p>
            <p>Collect ⚡ for power | ♥ for lives</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center relative">
      <div className="absolute top-2 right-2 z-10">
        <Button variant="ghost" size="icon" className="text-white" onClick={() => setSoundOn(!soundOn)}>
          {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </Button>
      </div>
      <canvas ref={canvasRef} width={400} height={500} className="w-full max-w-md border border-white/10 rounded-lg" />
      {/* Mobile controls */}
      <div className="flex justify-between w-full max-w-md px-4 mt-3">
        <div className="flex gap-2">
          <button className="w-16 h-14 rounded-xl bg-white/10 text-white text-xl active:bg-white/25 select-none"
            onTouchStart={e => { e.preventDefault(); touchRef.current.left = true; }}
            onTouchEnd={e => { e.preventDefault(); touchRef.current.left = false; }}
            onMouseDown={() => { touchRef.current.left = true; }}
            onMouseUp={() => { touchRef.current.left = false; }}
          >←</button>
          <button className="w-16 h-14 rounded-xl bg-white/10 text-white text-xl active:bg-white/25 select-none"
            onTouchStart={e => { e.preventDefault(); touchRef.current.right = true; }}
            onTouchEnd={e => { e.preventDefault(); touchRef.current.right = false; }}
            onMouseDown={() => { touchRef.current.right = true; }}
            onMouseUp={() => { touchRef.current.right = false; }}
          >→</button>
        </div>
        <button className="w-20 h-14 rounded-xl bg-red-500/30 border border-red-400/40 text-white text-lg font-bold active:bg-red-500/50 select-none"
          onTouchStart={e => { e.preventDefault(); touchRef.current.fire = true; }}
          onTouchEnd={e => { e.preventDefault(); touchRef.current.fire = false; }}
          onMouseDown={() => { touchRef.current.fire = true; }}
          onMouseUp={() => { touchRef.current.fire = false; }}
        >🔫 Fire</button>
      </div>
    </div>
  );
};

export default SpaceBlaster;
