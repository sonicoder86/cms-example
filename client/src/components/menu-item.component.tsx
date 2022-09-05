import { Link } from 'react-router-dom';

export function MenuItemComponent({ name, link }: { name: string; link: string; }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={link}>{name}</Link>
    </li>
  );
}
