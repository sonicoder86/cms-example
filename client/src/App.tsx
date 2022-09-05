import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu.component';
import { LoginController } from './controllers/login.controller';
import { HomeController } from './controllers/home.controller';
import { ContentController } from './controllers/content.controller';

export function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>

      <main className="flex-shrink-0">
        <Routes>
          <Route path="/" element={<LoginController />} />
          <Route path="/home" element={<HomeController />} />
          <Route path="/content" element={<ContentController />} />
        </Routes>
      </main>
    </div>
  );
}
