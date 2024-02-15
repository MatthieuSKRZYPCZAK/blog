import "./Header.scss";
import logo from "../../assets/img/logo-black.png";

const Header = () => {
  return (
    <>
      <header className="w-full bg-black">
        <nav className="flex items-center justify-around p-4 bg-black w-full">
          <div className="flex items-end space-x-6">
            <img
                        src={logo}
                        alt="logo matthieu skrzypczak"
                        height="100px"
                        width="100px"
                      />
              <h1 className="text-white font-semibold lg uppercase">FULLSTACK SOFTWARE ENGINEER</h1>
          </div>
          <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white uppercase"><span></span><span></span><span></span><span></span>Home</a>
            </li>
            <li>
              <a href="#" className="text-white uppercase"><span></span><span></span><span></span><span></span>Skills</a>
            </li>
            <li>
              <a href="#" className="text-white uppercase"><span></span><span></span><span></span><span></span>Projects</a>
            </li>
            <li>
              <a href="#" className="text-white uppercase"><span></span><span></span><span></span><span></span>Contact</a>
            </li>
            <li>
              <a href="/about" className="text-white uppercase"><span></span><span></span><span></span><span></span>About</a>
            </li>
          </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
