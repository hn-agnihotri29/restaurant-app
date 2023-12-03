# Problem Statement

This is a [React](https://reactjs.org/) frontend project assessment by Rox Wealth Fund Manager.

For this app, we made use of react.js to create a restaurant database in this application we created the REST API that runs locally on the server and uses the fetch function to fetch all JSON data  and implemented pagination from scratch and using a package like [React Router](https://reactrouter.com/en/main).

![image](https://github.com/hn-agnihotri29/restaurant-app/blob/master/public/images/paul-griffin-WWST6E8LxeE-unsplash.jpg)

This project build keeps in the find that the data provided will be an Array of objects in which we have details of all restaurants. Kindly provide the array of objects with the same format.
##Steps to follow
1. Either add an array of objects in the **db.json** file or insert API with the same format in _Restaurants.jsx_ and _RestaurantDetails.jsx_ file.
2. Then the following script separately.
   ```
   npm install
   ```
   ```
   json-server — watch db.json --port 3001
   ```
   ```
   npm start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `json-server — watch db.json --port 3001`
Open [http://localhost:3001/resturant](http://localhost:3001/resturant) to view the JSON data.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

