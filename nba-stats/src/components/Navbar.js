import React, {Component} from 'react';
import logo from '../assets/logo-sj.png';


class Navbar extends Component{
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      var x = document.getElementById("listMenu");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
    render() {
        return (
            <div id="navbar">
              <ul id="nav">
                <div id="listMenu">
                  <li><a href="#">Players</a></li>
                  <li><a href="#">Teams</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About</a></li>
                </div>
                <a href="javascript:void(0);" class="icon" onClick={this.handleClick}>
                  <i class="fa fa-bars"></i>
                </a>
                <div id="logo-main">
                  <li><a href="#"><img src={logo} id="logo-main"></img></a></li>
                </div>
              </ul>
            </div>
        );
    }
}

export default Navbar