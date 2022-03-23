import React, { Component } from 'react';
import { render } from "react-dom";
import '../../static/css/Nav.scss'

class Nav extends Component {
    render() {
      return (
          <div>
              <a href='/'>SocialSite</a>
                <i class="fa fa-bars"></i>
        </div>
      );
    }
  }
  
export default Nav;