const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: []
			//array of objects or items with hardcoded information from swapi
		},
		actions: {
			// Use getActions to call a function within a fuction
			deleteFavorite: index => {
				const newStore = getStore();
				var newFavorites = newStore.favorites.filter((item, ind) => index !== ind);
				setStore({ favorites: newFavorites });

				//line 14 were raplacing favorites in line 4 with new favorites in line 13
				//if we want to keep the values inside of favorites and add the new values we simply spread favorites as
				//...favorites, favorites:newFavorites
			},
			addFavorite: name => {
				const newStore = getStore();
				newStore.favorites.push(name);
				setStore({ newStore });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch("https://swapi.dev/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON
						console.log("responseAsJson", responseAsJson);
						setStore({ characters: responseAsJson.results });
						//.results specifies the location of our array inside of the fetch object in our API - same in line 30
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON
						console.log("responseAsJson", responseAsJson);
						setStore({ planets: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
