import React, { Component} from 'react';
import '../css/NavComponent.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import ico from "../assets/images/T.png";

class Top extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
          isNavOpen: false,
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      scrollTo(e){
          const k = e.target.id.split('#')[1]


          window.scrollTo({
              top:document.getElementById(`${k}`).offsetTop,
              behavior: 'smooth',
          })
          
      }

    render(){
        return(
            <React.Fragment>
                <Navbar dark className="navbar" expand="md" id="navbar">
                    <div className="container">
                        
                        <NavbarBrand className="mr-auto" id="#home"><img src={ico} height="35px"/></NavbarBrand>
                        <NavbarToggler className="NavbarToggler" onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="navleft">
                                <NavItem>
                                    <a className="nav-link"  id='#home' onClick={this.scrollTo}> HOME</a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" id='#aboutus' onClick={this.scrollTo}> ABOUT US</a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" id='#mainproj1' onClick={this.scrollTo}> EVOKE</a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link"  id='#pastprojs' onClick={this.scrollTo}> PAST PROJECTS</a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" id='#contact' onClick={this.scrollTo}> CONTACT US</a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Top;