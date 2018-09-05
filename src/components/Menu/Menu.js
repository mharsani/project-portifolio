import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return(
            <ul>
                <li><Link to="/app">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portifolio">Portifolio</Link></li>
            </ul>
        )
    }
}

export default Menu