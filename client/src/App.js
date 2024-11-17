import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ProjectRoutes from './AllRoutes/ProjectRoutes';
import Navbar from './Components/Navbar';
import Footers from './Components/Footers';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App w-full m-auto">
      <ToastContainer/>
      <Navbar/>
      <ProjectRoutes/>
      <Footers/>
    </div>
  );
}

export default App;
