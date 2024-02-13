import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../../assets/img/logo-black.png";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-black fixed-top navbar-expand-lg">
          <div className="container fluid">
            <div>
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  alt="logo matthieu skrzypczak"
                  width="100"
                  height="100"
                />
              </a>
              <span className="text-light">FULLSTACK SOFTWARE ENGINEER</span>
            </div>
            <div className="">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link text-light" href="#" >Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#" >About me</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#" >Skills</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#" >My project</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#" >Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
