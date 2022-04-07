import './App.css';
import GlassCard from './Components/GlassCard';

function App() {
  return (
    <div className="App" style={{
        backgroundColor: 'black',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <GlassCard/>
    </div>
  );
}

export default App;
