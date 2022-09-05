import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu';
import { Login } from './components/login';
import { Home } from './components/home';
import { Content } from './components/content';

export function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>

      <main className="flex-shrink-0">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </main>
    </div>
  );
}
