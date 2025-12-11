import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Auth from "./pages/Auth";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import LongQuestions from "./pages/LongQuestions";
import NCERTSolutions from "./pages/NCERTSolutions";
import PreviousYearPapers from "./pages/PreviousYearPapers";
import Downloads from "./pages/Downloads";
import KeyPoints from "./pages/KeyPoints";
import Help from "./pages/Help";
import SetupProfile from "./pages/SetupProfile";
import Motivations from "./pages/Motivations";
import GrammarLab from "./pages/GrammarLab";
import AdminInsert from "./pages/AdminInsert";
import StudyNotes from "./pages/StudyNotes";
import StudyMaterials from "./pages/StudyMaterials";
import ITTextbooks from "./pages/ITTextbooks";
import CBSEUpdates from "./pages/CBSEUpdates";
import MatchThePair from "./pages/games/MatchThePair";
import MemoryCards from "./pages/games/MemoryCards";
import TrueOrFalse from "./pages/games/TrueOrFalse";
import QuickFire from "./pages/games/QuickFire";
import FillBlanks from "./pages/games/FillBlanks";
import PlayChess from "./pages/games/PlayChess";
import ChessPuzzles from "./pages/games/ChessPuzzles";
import MultiplayerBattle from "./pages/MultiplayerBattle";
import BattleRoom from "./pages/BattleRoom";
import ProtectedRoute from "./components/ProtectedRoute";
import PremiumRoute from "./components/PremiumRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/setup-profile" element={<ProtectedRoute><SetupProfile /></ProtectedRoute>} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
          <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
          <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/long-questions" element={<PremiumRoute featureName="Long Answer Questions"><LongQuestions /></PremiumRoute>} />
          <Route path="/ncert-solutions" element={<PremiumRoute featureName="NCERT Solutions"><NCERTSolutions /></PremiumRoute>} />
          <Route path="/previous-year-papers" element={<PremiumRoute featureName="Previous Year Papers"><PreviousYearPapers /></PremiumRoute>} />
          <Route path="/motivations" element={<ProtectedRoute><Motivations /></ProtectedRoute>} />
          <Route path="/grammar-lab" element={<PremiumRoute featureName="Grammar Lab"><GrammarLab /></PremiumRoute>} />
          <Route path="/study-notes" element={<PremiumRoute featureName="Study Notes"><StudyNotes /></PremiumRoute>} />
          <Route path="/study-materials" element={<PremiumRoute featureName="Study Materials"><StudyMaterials /></PremiumRoute>} />
          <Route path="/downloads" element={<ProtectedRoute><Downloads /></ProtectedRoute>} />
          <Route path="/key-points" element={<PremiumRoute featureName="Key Points"><KeyPoints /></PremiumRoute>} />
          <Route path="/it-textbooks" element={<PremiumRoute featureName="IT Textbooks"><ITTextbooks /></PremiumRoute>} />
          <Route path="/cbse-updates" element={<ProtectedRoute><CBSEUpdates /></ProtectedRoute>} />
          <Route path="/help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
          <Route path="/admin-insert" element={<AdminInsert />} />
          <Route path="/games/match-pair" element={<PremiumRoute featureName="Match the Pair Game"><MatchThePair /></PremiumRoute>} />
          <Route path="/games/memory-cards" element={<PremiumRoute featureName="Memory Cards Game"><MemoryCards /></PremiumRoute>} />
          <Route path="/games/true-false" element={<PremiumRoute featureName="True or False Game"><TrueOrFalse /></PremiumRoute>} />
          <Route path="/games/quick-fire" element={<PremiumRoute featureName="Quick Fire Game"><QuickFire /></PremiumRoute>} />
          <Route path="/games/fill-blanks" element={<PremiumRoute featureName="Fill the Blanks Game"><FillBlanks /></PremiumRoute>} />
          <Route path="/games/chess" element={<ProtectedRoute><PlayChess /></ProtectedRoute>} />
          <Route path="/games/chess-puzzles" element={<ProtectedRoute><ChessPuzzles /></ProtectedRoute>} />
          <Route path="/multiplayer" element={<PremiumRoute featureName="Multiplayer Battle"><MultiplayerBattle /></PremiumRoute>} />
          <Route path="/battle/:roomCode" element={<PremiumRoute featureName="Multiplayer Battle"><BattleRoom /></PremiumRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
