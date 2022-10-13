import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sharedlayout from './pages/Sharedlayout';
import Home from './pages/Home';
import Error from './pages/Error';
import Job from './pages/Job';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Sharedlayout />}>
          <Route index element={<Home />} />
          <Route path='job/:jobId' element={<Job />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
