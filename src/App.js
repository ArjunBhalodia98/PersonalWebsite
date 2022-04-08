import './App.css';
import GlassCard from './Components/GlassCard';

function App() {
  return (
      <div className="App"
           style={{
               width: '100vw',
               height: '100vh',
               backgroundColor: '#363537',
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
           }}
      >
        <GlassCard/>
    </div>
  );
}

export default App;
