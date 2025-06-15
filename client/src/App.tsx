
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Desafios from "./pages/Desafios";
import Conscientizacao from "./pages/Conscientizacao";
import JogoIncendio from "./pages/JogoIncendio";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Só mostra o header se o usuário estiver logado */}
      {user && !loading && <Header />}
      
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        </Route>
        <Route path="/desafios">
          <ProtectedRoute>
            <Desafios />
          </ProtectedRoute>
        </Route>
        <Route path="/conscientizacao">
          <Conscientizacao />
        </Route>
        <Route path="/jogo-incendio">
          <JogoIncendio />
        </Route>
        <Route path="/quiz">
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
