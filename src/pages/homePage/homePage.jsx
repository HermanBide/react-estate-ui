import { useContext } from 'react';
import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext.jsx';

function HomePage() {

  const { currentUser } = useContext(AuthContext); 

  return ( 
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate and Get Your Dream Home.</h1>
          <p>
            Welcome and Join to see all the homes recommended for you. <br />
            Find the right home at the right price.
          </p>
          
          <SearchBar />
          <div className="boxes">
            <div className="box">
                <h1>15+</h1>
                <h2>Years of experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div>
            <div className="box">
                <h1>1100+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      {/*IMAGE CONTAINER*/}
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
