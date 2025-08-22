import { lazy, Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

// Portfolio App - Version 1.0.0 - GSAP Free Implementation
const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <Suspense fallback={<div className="loading-placeholder">Loading application...</div>}>
          <MainContainer>
            <Suspense fallback={<div className="loading-placeholder">Loading 3D character...</div>}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </ErrorBoundary>
  );
};

export default App;
