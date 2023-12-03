import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './restaurant.styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RestaurantDetails = () => {
  const [restaurants, setRestaurant] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    fetch('http://localhost:3001/restaurant')
      .then((response) => response.json())
      .then((restaurant) => setRestaurant(restaurant));
  }, [name]);

  console.log(restaurants);

  const mappedRestaurants = restaurants.map((obj) => (obj['name'] === name ? obj : null)).filter(Boolean);

  const restaurant = mappedRestaurants.length > 0 ? mappedRestaurants[0] : undefined;

  console.log(restaurant);

  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {restaurant && (
			<div>
			<div className="title">
				<h1>{restaurant.name}</h1>
			</div>
			<div className="flex-container">
				{restaurant.image && (
				<img src={process.env.PUBLIC_URL + '/images/img.jpg'} alt="" className="restaurant-img" />
				)}
				<div className="restaurant-infos">
				<div className="row">
					<h3 className="label">Name: </h3>
					<p className="text">{restaurant.name}</p>
				</div>
				<div className="row">
					<h3 className="label row">Description: </h3>
					<p className="text">{restaurant.ambiance.description}</p>
				</div>
				<div className="row">
					<h3 className="label row">Chef: </h3>
					<p className="text">{restaurant.chef.name}</p>
					<p className="text">{restaurant.chef.bio}</p>
					<p className="text">{restaurant.chef.signature_dish}</p>
				</div>
				</div>
			</div>

			{/* Menu Categories */}
			<div className="info-box">
				<h2>Menu</h2>
				<h3>Categories</h3>
				{restaurant.menu.categories.map((category, index) => (
				<div key={index}>
					<h3>{category.name}</h3>
					<ul>
					{category.items.map((item, itemIndex) => (
						<li key={itemIndex}>
						{item.name} - ${item.price}
						</li>
					))}
					</ul>
				</div>
				))}
				
				{/* Seasonal Menu */}
				<h3>Seasonal Menu</h3>
				{restaurant.menu.seasonal_menu.items.map((item, index) => (
				<div key={index}>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					<p>Price: ${item.price}</p>
				</div>
				))}

			</div>

			{/* Upcoming Events */}
			<div className="info-box">
				<h2>Upcoming Events</h2>
				{restaurant.events.upcoming_events.map((event, index) => (
				<div key={index}>
					<h3>{event.name}</h3>
					<p>Date: {event.date}</p>
					<p>{event.description}</p>
				</div>
				))}
			</div>
			

			{/* Awards */}
			<div className="info-box">
				<h2>Awards</h2>
				{restaurant.awards.map((award, index) => (
				<div key={index}>
					<p>Year: {award.year}</p>
					<p>Organization: {award.organization}</p>
					<p>Award: {award.award}</p>
				</div>
				))}
			</div>

			<div className="info-box">
            <h2>Reviews</h2>
            {restaurant.reviews.length > 0 ? (
              <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                {restaurant.reviews.map((review, index) => (
                  <div key={index}>
                    <h3>{review.customer_name}</h3>
                    <p>Rating: {review.rating}</p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </Slider>
            ) : (
              <p>No reviews available.</p>
            )}
          </div>

			
		  </div>
		)}
		</div>
  );
};

export default RestaurantDetails;
