import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ProjectRoutes from './AllRoutes/ProjectRoutes';

function App() {
  return (
    <div className="App">
      <ProjectRoutes/>
    </div>
  );
}

export default App;
