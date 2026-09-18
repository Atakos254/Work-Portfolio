import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Loader2 } from 'lucide-react';

// Lazy-load pages for code splitting
const Home          = lazy(() => import('./pages/Home'));
const Projects      = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Experience    = lazy(() => import('./pages/Experience'));
const About         = lazy(() => import('./pages/About'));
const Contact       = lazy(() => import('./pages/Contact'));

const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <Loader2 className="w-8 h-8 text-neutral-900 animate-spin" />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/"            element={<Home />} />
              <Route path="/projects"    element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/experience"  element={<Experience />} />
              <Route path="/about"       element={<About />} />
              <Route path="/contact"     element={<Contact />} />
              {/* 404 fallback */}
              <Route path="*" element={
                <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
                  <div className="text-7xl font-black text-slate-800">404</div>
                  <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
                  <p className="text-slate-400">The page you're looking for doesn't exist.</p>
                  <a href="/" className="btn-primary mt-2">Go Home</a>
                </div>
              } />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
