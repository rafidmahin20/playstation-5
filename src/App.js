import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<}/>
      </Routes>
    </div>
  );
}

export default App;
