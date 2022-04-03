import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
