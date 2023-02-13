import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav id='navigation'>
      <ul>
        <li>
          <Link to='about-us'>About us</Link>
        </li>
        <li>
          <Link to='offer'>Offer</Link>
        </li>
        <li>
          <Link to='contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
