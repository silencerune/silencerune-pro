import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Element extends React.Component {
    render() {
        return (
            <Link to={`${this.props.to}`}>
                <span className="select">
                    {this.props.headline}
                </span>
            </Link>

        );
    }
}
export default Element;
// import React from 'react';
// import { render } from "react-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// // import {r} from 'SASS';
// class Header extends React.Component {
//     render() {
//         return (
//             <div class="row header">
//                 <div class="settitle">Tseng's portfolio</div>
//                 <span class="settitle select">
//                     <Link to='/'> web</Link>
//                 </span>
//                 <span class="settitle select" >
//                     <Link to='/animation'>animation</Link>
//                 </span>
//             </div>

//         );
//     }

// }
// export default Header;
// // export default InTheLabel;