import './App.css';
import { Outlet, useNavigate} from 'react-router-dom';
import Header from './components/header';

function App() {
  const navigate = useNavigate()
 
  return (
    <>
      <Header navigate={navigate}/>
      <div className="App"></div>
      <Outlet context={{navigate}} />
    </>
  );
}

export default App;
