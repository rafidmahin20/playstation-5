import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogsPage from './Components/Blogs/BlogsPage';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import ReviewPage from './Components/Review/ReviewPage';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/review' element={<ReviewPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/blogs' element={<BlogsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
