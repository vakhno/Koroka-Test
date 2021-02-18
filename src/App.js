import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// pages
import {SignIn, Catalog, Help, FreeTest} from './pages/';
// components
import Header from './components/Header/Header'

function App() {
	return (
		<Router basename='/Koroka-Test'>
			<Switch>
				<Route exact path='/' component={SignIn}/>
				<div className="content">
					<Header/>
					<Route exact path='/catalog' component={Catalog}/>
					<Route exact path='/help' component={Help}/>
					<Route exact path='/test' component={FreeTest}/>
				</div>
			</Switch>
		</Router>
	);
}

export default App;
