import './styles/Common.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Sub1 from './components/Sub1';
import Sub2 from './components/Sub2';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* 메인 */}
        <Header />

        <Routes>
            <Route path='/' element={<Container />} />
            <Route path='/sub1' element={<Sub1 />} />
            <Route path='/sub2' element={<Sub2 />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
