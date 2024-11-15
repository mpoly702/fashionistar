import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //add outlet here
import './styles/App.css'; // Import the CSS file
import './styles/HeroSection.css';

// Importing the components
import Header from './components/Header';
// import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import News from './components/News';
import Blog from './components/Blog';
import Chat from './components/Chat';
import About from './components/AboutSection';
import Profile from './components/Profile';
import BlogForm from './components/Blog/BlogForm';
import HeroSection from './components/HeroSection';
import './index.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/News" element={<News />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/create-post" element={<BlogForm />} />
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

/*const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This is where nested routes will render */
     /* <Footer />
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         {/* Layout route that wraps other components */
         /*<Route element={<AppLayout />}>
          <Route path="/News" element={<News />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};*/

//export default App;
