import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./restaurant.styles.css"


const Restaurants = () => {
	const [restaurants, setRestaurant] = useState([])
	const navigate = useNavigate();

	useEffect(() => {
        fetch('http://localhost:3001/restaurant')
          .then(response => response.json())
          .then((restaurant) => setRestaurant(restaurant))
    }, [])

	return (
		<div className="container back">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div className="title">
				<h1>Resturants</h1>
			</div>
			<div className="restaurants-container">
				{restaurants.map((restaurant, index) => (
					<div key={index} className="restaurant-card">
						<img src={process.env.PUBLIC_URL + '/images/img.jpg'} alt="" className="restaurant-img" />
						<div className="restaurant-info">
							<div className="content-text">
								<h2 className="restaurant-name">{restaurant.name}</h2>
								<span className="info">{restaurant.chef.name}</span>
								<p className='desc'>Description: </p>
								<span className='description'>{restaurant.ambiance.description}</span>
								<p className='desc'>Address: </p>
								<span className='description'>{restaurant.location.address}</span>
							</div>
							<Link to={`/products/${restaurant.name}`}>
								<div className="btn">View Details</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Restaurants;
