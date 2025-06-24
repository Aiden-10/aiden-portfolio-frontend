import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Blog from './pages/blog'
import PostDetail from './pages/PostDetail';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<PostDetail />} />


      </Routes>
    </Router>
  )
}

export default App
