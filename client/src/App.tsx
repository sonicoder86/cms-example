import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu.component';
import { Login } from './components/login.component';
import { Home } from './components/home.component';
import { Content } from './components/content.component';

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
