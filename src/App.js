import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from './components/index';
import { Home, About, Contact, Article, PageNotFound } from './pages/index';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="content-container">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/read/:id/:index/:page' element={<Article />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer className="footer"/>
      </Router>
    </div>
  )
}

export default App;
