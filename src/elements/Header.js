export default function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-light fixed-top">
        <a className="navbar-brand" id="welcomeMessage" href=".">
          Good Morning
        </a>
        <button id="metricButton" className="btn btn-primary shadow-none">
          C°
        </button>
      </nav>
    </div>
  );
}
