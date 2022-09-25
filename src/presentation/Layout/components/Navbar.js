import React from "react";
import logo from "../../common/Assets/Images/logo.png";
import ProfilePic from "../../common/Assets/Images/proPic.jpeg";
import { BsBookFill, BsGlobe2, BsGiftFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

export default function Navbar() {
  return (
    <div id="navbar">
      <div>
        <img className="logo" src={logo} alt="logo" />
        <div className="profile">
          <div className="profile-img-container">
            <img src={ProfilePic} alt="profile" />
          </div>
          <span className="name">Kristin Watson</span>
          <span className="sub">Chef de partie</span>
          <span className="credits">
            <BsGiftFill color="#dd432a" /> 37
          </span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <span className="icon">
            <BsBookFill color="#dd432a" />
          </span>
          <span className="title">Recipes</span>{" "}
        </div>
        <div className="menuItem">
          <span className="icon">
            <MdFavorite color="grey" />
          </span>
          <span className="title">Favorites</span>{" "}
        </div>{" "}
        <div className="menuItem">
          <span className="icon">
            <SiBookstack color="grey" />
          </span>
          <span className="title">Coursed</span>{" "}
        </div>{" "}
        <div className="menuItem">
          <span className="icon">
            <BsGlobe2 color="grey" />
          </span>
          <span className="title">Community</span>{" "}
        </div>
      </div>
      <div className="nav-footer">
        <span className="imgs">
          <img
            className="image1"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="first"
          ></img>
          <img
            className="image2"
            src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="first"
          ></img>
          <button>+</button>
        </span>
        <span className="desc">
          Create a team and take part in <a href="#desc">TV Show</a>
        </span>
      </div>
    </div>
  );
}
