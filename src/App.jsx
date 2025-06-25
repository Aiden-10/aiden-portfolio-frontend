import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Blog from './pages/blog'
import PostDetail from './pages/PostDetail';
import Attributions from './pages/attributions';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/attributions" element={<Attributions />} />


      </Routes>
    </Router>
  )
}

export default App
