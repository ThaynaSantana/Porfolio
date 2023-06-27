import './App.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import SocialMedias from './pages/SocialMedias';
import Certificates from './pages/Certificates';
import Header from './layout/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
          <Route path='redes' element={<SocialMedias />}/>
          <Route path='certificados' element={<Certificates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
