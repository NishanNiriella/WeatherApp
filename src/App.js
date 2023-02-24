import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import LoginPage from './components/pages/loginPage';
import HomePage from './components/pages/homePage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
