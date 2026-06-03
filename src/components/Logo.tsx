import { Link } from 'react-router-dom';
import firstDataLogo from '../assets/firstdata-logo.svg';

export function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src={firstDataLogo} alt="FirstData" className="h-6 w-auto sm:h-8" />
    </Link>
  );
}
