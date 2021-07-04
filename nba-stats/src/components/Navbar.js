import React, {Component} from 'react';

class Navbar extends Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Players</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <div id="logo-main">
                  <li><a href="#">NBA STATS</a></li>
                </div>
              </ul>
            </div>
        );
    }
}

export default Navbar