import List from "../../components/list/list";
import Chat from "../../components/chat/chat";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from 'react-router-dom'

function ProfilePage() {

  const { updateUser, currentUser } = useContext(AuthContext);

  console.log(currentUser, "currentUser");

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null)
      navigate("/");
      alert("You are logged out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
            <button >Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser?.avatar || "/noavatar.jpg"}
                alt="avatar"
              />
            </span>
            <span>
              Username: <b>{currentUser?.username || "N/A"}</b>
            </span>
            <span>
              E-mail: <b>{currentUser?.email || "N/A"}</b>
            </span>
            <button type="submit" onClick={handleLogout}>
              logout
            </button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
            <button>Create New Post</button>
            </Link>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
