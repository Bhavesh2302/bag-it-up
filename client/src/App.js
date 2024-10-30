import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ProjectRoutes from './AllRoutes/ProjectRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProjectRoutes/>
    </div>
  );
}

export default App;
