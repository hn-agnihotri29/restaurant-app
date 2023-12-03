import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<div className="banner-container">
				<div className="banner">
					<h2>Let's have some fun in the resturants.</h2>
					<Link to="/products">
						<div className="btn">View Resturants</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
