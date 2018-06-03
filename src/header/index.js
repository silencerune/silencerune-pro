import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Element from "./element";
// import {r} from 'SASS';
class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="row header">
                    <div className="settitle">Tseng's portfolio</div>
                </div>
                <div className="row header">
                    {/* <span class="settitle select">
                    <Link to='/'> web</Link>
                </span> */}
                    <Element headline='web' to='/' />
                    <Element headline='animation' to='/animation' />
                    {/* <span class="settitle select" >
                        <Link to='/animation'>animation</Link>
                    </span> */}
                </div>
            </div>

        );
    }

}
export default Header;
// export default InTheLabel;