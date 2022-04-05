import MapView from './components/MapView';
import Header from './components/Header/Header';
import { ApiProvider } from './context/ApiContext';
import './App.css';

function App() {
  return (
    <ApiProvider>
      <Header />
      <MapView />
    </ApiProvider>
      
  );
}

export default App;
