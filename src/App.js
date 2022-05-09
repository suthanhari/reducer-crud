import './App.css';
import Create from './component/Create';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from './component/UserList';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Create />} />
            <Route path='/userlist' element={<UserList />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
