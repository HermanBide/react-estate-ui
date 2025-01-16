import "./navbar.scss";
import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import apiRequest from "../../lib/apiRequest";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const {currentUser, updateUser} = useContext(AuthContext)

  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     const res = await apiRequest.post("/auth/logout");
  //     updateUser(null)
  //     navigate("/");
  //     console.log(res, "logged out");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <nav className="nav">
      {/* LEFT SIDE */}
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>CalEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">

        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "/noavatar.jpg"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>

            {/* <button className="logout" onClick={handleLogout}>logout</button> */}
          </div>
        ) : (
          <>
            <Link to="/login" className="login">
              Sign in
            </Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}

        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          {/* Show "X" when open is true, otherwise show the menu icon */}
          {open ? (
            <IoCloseSharp
              color="#343a40"
              size={hover ? 38 : 35}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          ) : (
            <img src="/menu.png" alt="Open Menu" />
          )}
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/" className="login">
            Sign in
          </a>
          <a href="/" className="register">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
