import './App.css';
import './Theme/Helpers.css';
import { useState, useEffect } from 'react';
import { Fade } from 'react-router';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LoadingScreen from './Pages/LoadingScreen';
import Homepage from './Pages/Homepage';
import NotFound from './Pages/NotFound';

function App() {
	let navigate = useNavigate();
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="App">
			{Loading ? (
				<LoadingScreen />
			) : (
				<Routes>
					<Route exact path="/" element={<Homepage />} />

					<Route path="/Loading" element={<LoadingScreen />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
