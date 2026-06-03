import firstDataLogo from '../assets/firstdata-logo.svg';

export function Logo() {
  return (
    <a href="/v4/" className="logo" aria-label="FirstData home">
      <img src={firstDataLogo} alt="FirstData" />
    </a>
  );
}
