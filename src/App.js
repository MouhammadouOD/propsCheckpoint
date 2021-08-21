import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile'; 
import bugatti from './bugatti.png';

function App() {
  const style = {
    backgroundColor : "#282C34"
 }
  const handleName=(name)=> alert(name);
  return (
    <div className="App" style={style}>
      <Profile fullName='Bugatti' bio='i am a very fast Car for Superstars ' profession='live for run' handleName={handleName}> 
        <img src={bugatti} alt='car'/>
      </Profile>
    </div>
  );
}

export default App;
