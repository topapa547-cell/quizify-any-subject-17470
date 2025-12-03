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
import MatchThePair from "./pages/games/MatchThePair";
import MemoryCards from "./pages/games/MemoryCards";
import TrueOrFalse from "./pages/games/TrueOrFalse";
import QuickFire from "./pages/games/QuickFire";
import FillBlanks from "./pages/games/FillBlanks";
import ProtectedRoute from "./components/ProtectedRoute";

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
          <Route path="/long-questions" element={<ProtectedRoute><LongQuestions /></ProtectedRoute>} />
          <Route path="/ncert-solutions" element={<ProtectedRoute><NCERTSolutions /></ProtectedRoute>} />
          <Route path="/previous-year-papers" element={<ProtectedRoute><PreviousYearPapers /></ProtectedRoute>} />
          <Route path="/motivations" element={<ProtectedRoute><Motivations /></ProtectedRoute>} />
          <Route path="/grammar-lab" element={<ProtectedRoute><GrammarLab /></ProtectedRoute>} />
          <Route path="/study-notes" element={<ProtectedRoute><StudyNotes /></ProtectedRoute>} />
          <Route path="/study-materials" element={<ProtectedRoute><StudyMaterials /></ProtectedRoute>} />
          <Route path="/downloads" element={<ProtectedRoute><Downloads /></ProtectedRoute>} />
          <Route path="/key-points" element={<ProtectedRoute><KeyPoints /></ProtectedRoute>} />
          <Route path="/it-textbooks" element={<ProtectedRoute><ITTextbooks /></ProtectedRoute>} />
          <Route path="/help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
          <Route path="/admin-insert" element={<AdminInsert />} />
          <Route path="/games/match-pair" element={<ProtectedRoute><MatchThePair /></ProtectedRoute>} />
          <Route path="/games/memory-cards" element={<ProtectedRoute><MemoryCards /></ProtectedRoute>} />
          <Route path="/games/true-false" element={<ProtectedRoute><TrueOrFalse /></ProtectedRoute>} />
          <Route path="/games/quick-fire" element={<ProtectedRoute><QuickFire /></ProtectedRoute>} />
          <Route path="/games/fill-blanks" element={<ProtectedRoute><FillBlanks /></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
