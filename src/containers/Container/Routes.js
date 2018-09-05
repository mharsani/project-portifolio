import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom';
import Portifolio from '../../Pages/Portifolio';
import About from '../../Pages/About-us';
import App from  '../App/App';

class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/app' component={App} />
                <Route path="/portifolio" component={Portifolio} />
                <Route path="/about" component={About} />
            </Switch>
        )
    }
    
}

export default Routes