import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ProjectRoutes from './AllRoutes/ProjectRoutes';
import Navbar from './Components/Navbar';
import Footers from './Components/Footers';

function App() {
  return (
    <div className="App w-full m-auto">
      <Navbar/>
      <ProjectRoutes/>
      <Footers/>
    </div>
  );
}

export default App;
