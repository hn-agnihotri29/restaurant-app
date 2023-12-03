import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Restaurants = lazy(() => import('./Pages/Restaurants'));
const RestaurantDetails = lazy(() => import('./Pages/RestaurantDetails'));
const NoMatch = lazy(() => import('./Components/NoMatch'));

const App = () => {
	return (
		<>
			<NavBar />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Restaurants />} />
					<Route path="/products/:name" element={<RestaurantDetails />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
