<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess ELO Challenge</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Load Inter font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Load chess.js for game logic -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"></script>
    <style>
        :root {
            --board-size: min(90vw, 400px);
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0d1117; /* Dark background */
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            padding: 1rem;
        }
        .board-container {
            width: var(--board-size);
            height: var(--board-size);
            margin: 0 auto;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            border-radius: 0.5rem;
            overflow: hidden;
            touch-action: none; /* Prevent scrolling issues on touch */
        }
        /* Style for the chess squares */
        .square {
            width: 12.5%;
            height: 12.5%;
            float: left;
            position: relative;
            cursor: pointer;
        }
        .light {
            background-color: #f0d9b5;
        }
        .dark {
            background-color: #b58863;
        }
        .square-55d63 {
            transition: background-color 0.1s ease;
        }
        /* Piece styling - using Unicode for simplicity in this single file approach */
        .piece {
            font-size: calc(var(--board-size) / 9); /* Make pieces fit nicely */
            line-height: calc(var(--board-size) / 8);
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            user-select: none;
            cursor: grab;
            /* Added text shadow for better contrast on all square colors */
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6), -1px -1px 2px rgba(255, 255, 255, 0.3);
        }
        .highlight-move {
            box-shadow: inset 0 0 0 9999px rgba(0, 255, 0, 0.2);
        }
        .highlight-select {
            box-shadow: inset 0 0 0 9999px rgba(255, 255, 0, 0.3);
        }
        /* Responsive adjustments */
        @media (max-width: 640px) {
            :root {
                --board-size: 96vw;
            }
        }
        /* Custom slider track color */
        #elo-slider::-webkit-slider-runnable-track {
            background: #4b5563;
            border-radius: 0.5rem;
        }
        #elo-slider::-moz-range-track {
            background: #4b5563;
            border-radius: 0.5rem;
        }
        #elo-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #10b981; /* Emerald */
            cursor: pointer;
            margin-top: -8px; 
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        }
        #elo-slider::-moz-range-thumb {
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #10b981;
            cursor: pointer;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        }
    </style>
</head>
<body class="p-4">

    <!-- Firebase SDKs -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, doc, setDoc, getDoc, onSnapshot, updateDoc, collection, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        // Global variables provided by the canvas environment
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

        let db, auth, userId = null;

        // Function to initialize Firebase
        window.initializeFirebase = async () => {
            if (!firebaseConfig) {
                console.error("Firebase configuration is missing.");
                return;
            }
            setLogLevel('debug'); // Enable Firestore logging

            const app = initializeApp(firebaseConfig);
            db = getFirestore(app);
            auth = getAuth(app);

            // Authentication
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    userId = user.uid;
                    document.getElementById('user-id-display').textContent = `User ID: ${userId}`;
                    console.log("Firebase Auth State Changed. User ID:", userId);
                    window.game.setFirebaseReady(true, db, userId, appId);
                } else {
                    try {
                        if (initialAuthToken) {
                            await signInWithCustomToken(auth, initialAuthToken);
                        } else {
                            await signInAnonymously(auth);
                        }
                    } catch (error) {
                        console.error("Firebase Sign-in failed:", error);
                    }
                }
            });
        };

        window.initializeFirebase();

        // Make necessary functions globally available for the game logic
        window.firebase = {
            getFirestore: () => db,
            getUserId: () => userId,
            getAppId: () => appId,
            doc: doc,
            setDoc: setDoc,
            onSnapshot: onSnapshot,
            updateDoc: updateDoc,
            collection: collection,
            getDoc: getDoc,
        };
    </script>

    <div id="game-container" class="w-full max-w-lg mx-auto flex flex-col items-center">
        <!-- User ID Display (Mandatory for multi-user apps) -->
        <div id="user-id-display" class="text-xs text-gray-400 mb-4 p-2 bg-gray-800 rounded-lg w-full overflow-x-auto">
            Initializing...
        </div>

        <!-- Setup Screen -->
        <div id="setup-screen" class="w-full bg-gray-800 p-6 rounded-xl shadow-2xl transition-opacity duration-500 ease-in-out">
            <h1 class="text-3xl font-bold text-white mb-6 text-center">Chess ELO Challenge</h1>

            <!-- Player Color Selection -->
            <div class="mb-6">
                <label class="block text-gray-300 font-semibold mb-2">Select Your Color</label>
                <div class="flex space-x-4">
                    <button data-color="w" class="color-select-btn flex-1 py-3 px-4 rounded-lg text-white font-bold transition-all duration-200 shadow-md hover:scale-[1.02] bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
                        <span class="mr-2">⚪</span> Play as White
                    </button>
                    <button data-color="b" class="color-select-btn flex-1 py-3 px-4 rounded-lg text-white font-bold transition-all duration-200 shadow-md hover:scale-[1.02] bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
                        <span class="mr-2">⚫</span> Play as Black
                    </button>
                </div>
            </div>

            <!-- Difficulty Selection - Replaced with Slider -->
            <div class="mb-6">
                <label for="elo-slider" class="block text-gray-300 font-semibold mb-3">
                    AI Difficulty (Simulated ELO): <span id="elo-display" class="text-emerald-400 font-bold">1000</span>
                </label>
                <!-- Slider for ELO selection from 0 to 2500 -->
                <input type="range" id="elo-slider" min="0" max="2500" value="1000" step="50"
                       class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
            </div>

            <!-- Start Button -->
            <button id="start-game-btn" disabled
                    class="w-full py-3 mt-4 rounded-lg text-white font-bold text-lg transition-all duration-300 bg-gray-600 cursor-not-allowed shadow-xl">
                Start Game
            </button>

            <!-- Status Message -->
            <p id="setup-status" class="text-sm text-red-400 mt-3 text-center"></p>
        </div>

        <!-- Game Board Screen -->
        <div id="game-screen" class="hidden w-full flex flex-col items-center">
            <h2 id="game-status" class="text-2xl font-bold text-white mb-4 mt-2">White to Move</h2>
            <div class="board-container mb-6">
                <div id="board" class="w-full h-full"></div>
            </div>
            <button id="new-game-btn" class="py-2 px-6 rounded-lg text-white font-bold transition-all duration-200 bg-red-600 hover:bg-red-700 shadow-md">
                New Game Setup
            </button>
        </div>
    </div>

    <!-- The actual game logic and controller -->
    <script>
        window.game = (function() {
            let chess = null;
            let db = null;
            let userId = null;
            let appId = null;
            let firebaseReady = false;

            let playerColor = null; // 'w' or 'b'
            let aiElo = 1000; // Default ELO from slider
            let gameId = null;

            const PIECES = {
                'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟',
                'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙'
            };

            const boardEl = document.getElementById('board');
            const setupScreen = document.getElementById('setup-screen');
            const gameScreen = document.getElementById('game-screen');
            const startGameBtn = document.getElementById('start-game-btn');
            const newGameBtn = document.getElementById('new-game-btn');
            const setupStatusEl = document.getElementById('setup-status');
            const gameStatusEl = document.getElementById('game-status');
            // New slider elements
            const eloSlider = document.getElementById('elo-slider');
            const eloDisplay = document.getElementById('elo-display');

            let selectedSquare = null;
            let currentBoard = null;

            // Initialize ELO display on load
            eloDisplay.textContent = eloSlider.value;
            aiElo = parseInt(eloSlider.value);


            // --- UI/Setup Logic ---
            const updateStartButton = () => {
                // Check if color is selected and ELO is set
                if (playerColor && aiElo >= 0) {
                    startGameBtn.disabled = false;
                    startGameBtn.classList.remove('bg-gray-600', 'cursor-not-allowed');
                    startGameBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
                    setupStatusEl.textContent = `Ready: Playing as ${playerColor === 'w' ? 'White' : 'Black'} against AI ELO ${aiElo}.`;
                } else {
                    startGameBtn.disabled = true;
                    startGameBtn.classList.add('bg-gray-600', 'cursor-not-allowed');
                    startGameBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
                    setupStatusEl.textContent = 'Please select your color and AI difficulty.';
                }
            };

            // Event listeners for color selection
            document.querySelectorAll('.color-select-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    document.querySelectorAll('.color-select-btn').forEach(btn => {
                        btn.classList.remove('ring-4', 'ring-white', 'ring-opacity-70');
                    });
                    playerColor = e.currentTarget.dataset.color;
                    e.currentTarget.classList.add('ring-4', 'ring-white', 'ring-opacity-70');
                    updateStartButton();
                });
            });

            // Event listener for ELO slider
            eloSlider.addEventListener('input', (e) => {
                aiElo = parseInt(e.target.value);
                eloDisplay.textContent = aiElo;
                updateStartButton();
            });

            // Start Game Button
            startGameBtn.addEventListener('click', async () => {
                if (playerColor && aiElo >= 0 && firebaseReady) {
                    gameId = `${userId}-${Date.now()}`;
                    setupScreen.classList.add('hidden');
                    gameScreen.classList.remove('hidden');
                    setupGame();
                } else if (!firebaseReady) {
                    setupStatusEl.textContent = 'Still initializing connection... please wait.';
                } else {
                    setupStatusEl.textContent = 'Please complete all selections.';
                }
            });

            // New Game Button
            newGameBtn.addEventListener('click', () => {
                gameScreen.classList.add('hidden');
                setupScreen.classList.remove('hidden');
                resetBoardUI();
                gameId = null;
            });

            // --- Core Game Functions ---

            const createBoardUI = (fen) => {
                boardEl.innerHTML = '';
                let rank, file, square, color, piece;
                let boardArray = chess.board();

                // If player is black, reverse the board presentation for the player's perspective
                const ranks = playerColor === 'b' ? [1, 2, 3, 4, 5, 6, 7, 8] : [8, 7, 6, 5, 4, 3, 2, 1];
                const files = playerColor === 'b' ? ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'] : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


                for (let r = 0; r < 8; r++) {
                    for (let f = 0; f < 8; f++) {
                        // Calculate square based on orientation
                        const rankIndex = playerColor === 'b' ? r : 7 - r;
                        const fileIndex = f;
                        rank = ranks[r];
                        file = files[f];
                        square = file + rank;

                        const pieceData = chess.get(square);

                        // Determine color for the square UI, independent of orientation
                        const r_abs = 8 - rank; // 0-7 from top
                        const f_abs = file.charCodeAt(0) - 'a'.charCodeAt(0); // 0-7 from left
                        color = (r_abs + f_abs) % 2 === 0 ? 'light' : 'dark';

                        const squareEl = document.createElement('div');
                        squareEl.classList.add('square', color);
                        squareEl.dataset.square = square;
                        squareEl.id = `sq-${square}`;
                        squareEl.innerHTML = `<span class="piece">${pieceData ? PIECES[pieceData.type] : ''}</span>`;

                        squareEl.addEventListener('click', onSquareClick);
                        boardEl.appendChild(squareEl);
                    }
                }
                updateBoardUI(); // Call update to set initial piece colors
            };

            const resetBoardUI = () => {
                boardEl.innerHTML = '';
                selectedSquare = null;
                gameStatusEl.textContent = '';
                document.querySelectorAll('.square').forEach(el => el.classList.remove('highlight-move', 'highlight-select'));
            };

            const updateBoardUI = () => {
                // Remove all pieces
                document.querySelectorAll('.piece').forEach(p => p.textContent = '');

                // Place new pieces and set colors (FIXED CONTRAST ISSUE)
                let boardArray = chess.board();
                for (let r = 0; r < 8; r++) {
                    for (let f = 0; f < 8; f++) {
                        const square = String.fromCharCode(97 + f) + (8 - r);
                        const pieceData = boardArray[r][f];
                        const squareEl = document.getElementById(`sq-${square}`);

                        if (squareEl) {
                            const pieceSpan = squareEl.querySelector('.piece');
                            if (pieceData && pieceSpan) {
                                pieceSpan.textContent = PIECES[pieceData.type];
                                // Use high contrast colors: white pieces are white, black pieces are dark grey/black
                                pieceSpan.style.color = pieceData.color === 'w' ? '#ffffff' : '#000000';
                            }
                        }
                    }
                }
            };

            const highlightMoves = (square) => {
                document.querySelectorAll('.square').forEach(el => el.classList.remove('highlight-move', 'highlight-select'));

                if (!square) return;

                document.getElementById(`sq-${square}`).classList.add('highlight-select');

                const moves = chess.moves({ square: square, verbose: true });
                moves.forEach(move => {
                    document.getElementById(`sq-${move.to}`).classList.add('highlight-move');
                });
            };

            const onSquareClick = (e) => {
                if (chess.turn() !== playerColor) return; // Not player's turn

                const square = e.currentTarget.dataset.square;
                const piece = chess.get(square);

                if (selectedSquare) {
                    // Try to make a move
                    let move = {
                        from: selectedSquare,
                        to: square,
                        promotion: 'q' // Always promote to queen for simplicity
                    };
                    const result = chess.move(move);
                    selectedSquare = null;
                    highlightMoves(null);

                    if (result) {
                        updateBoardUI();
                        saveGame(chess.fen());
                        updateStatus();
                        if (!chess.game_over()) {
                            setTimeout(makeAiMove, 500); // Give player time to see the move
                        }
                    } else {
                        // Invalid move, check if we clicked on a new piece
                        if (piece && piece.color === playerColor) {
                            selectedSquare = square;
                            highlightMoves(square);
                        } else {
                            selectedSquare = null;
                            highlightMoves(null);
                        }
                    }
                } else {
                    // Select a piece
                    if (piece && piece.color === playerColor) {
                        selectedSquare = square;
                        highlightMoves(square);
                    }
                }
            };

            const updateStatus = () => {
                let status = "";

                if (chess.in_checkmate()) {
                    status = `Game Over. ${chess.turn() === 'w' ? 'Black' : 'White'} wins by checkmate!`;
                    gameStatusEl.classList.remove('text-white');
                    gameStatusEl.classList.add('text-yellow-400');
                } else if (chess.in_draw()) {
                    s
