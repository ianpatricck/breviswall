import "./App.css";
import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";
import { Home } from "@/pages/Home/Home";
import { Register } from "@/pages/Register/Register";
import { Dashboard } from "@/pages/Dashboard/Dashboard";
import { NotFound } from "@/pages/NotFound/NotFound";
import { Footer } from "@/layout/Footer/Footer";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Home path="/" />
          <Route path="/signup" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <NotFound default />
        </Router>
      </ErrorBoundary>

      <Footer />
    </LocationProvider>
  );
}
