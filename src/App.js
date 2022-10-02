import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './components/page404';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/*******ROUTES*********/}
      <div className="bg-light">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

      {/*******FOOTER*********
      <Footer />*/}
    </BrowserRouter>
  );
}

export default App;
