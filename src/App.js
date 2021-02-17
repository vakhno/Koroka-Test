import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// pages
import {SignIn, Catalog, Help} from './pages/';
// components
import Header from './components/Header/Header'

function App() {
	return (
		<Router basename='/Koroka'>
			<Switch>
				<Route exact path='/' component={SignIn}/>
				<>
					<Header/>
					<Route exact path='/catalog' component={Catalog}/>
					<Route exact path='/help' component={Help}/>
				</>
			</Switch>
		</Router>
	);
}

export default App;
