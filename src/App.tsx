import './App.css';
import Navbar from './components/navbar/Navbar';
import AppRouter from './utils/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <main>
              <AppRouter />
            </main>
          </AuthProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
