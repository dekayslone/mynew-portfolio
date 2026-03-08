import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { BrandQuestionnaire } from './pages/Questionnaire';
import { MotionQuestionnaire } from './pages/MotionQuestionnaire';
import { DesignGallery } from './pages/DesignGallery';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionnaire" element={<BrandQuestionnaire />} />
        <Route path="/motion-brief" element={<MotionQuestionnaire />} />
        <Route path="/design-gallery" element={<DesignGallery />} />
      </Routes>
    </Router>
  );
}
