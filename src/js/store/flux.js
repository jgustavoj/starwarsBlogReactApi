const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//array of objects or items with hardcoded information from swapi
			characters: [
				{
					birth_year: "19 BBY",
					eye_color: "Blue",
					films: ["https://swapi.dev/api/films/1/"],
					gender: "Male",
					hair_color: "Blond",
					height: "172",
					homeworld: "https://swapi.dev/api/planets/1/",
					mass: "77",
					name: "Luke Skywalker",
					skin_color: "Fair",
					created: "2014-12-09T13:50:51.644000Z",
					edited: "2014-12-10T13:52:43.172000Z",
					species: ["https://swapi.dev/api/species/1/"],
					starships: ["https://swapi.dev/api/starships/12/"],
					url: "https://swapi.dev/api/people/1/",
					vehicles: ["https://swapi.dev/api/vehicles/14/"]
				},
				{
					birth_year: "19 BBY",
					eye_color: "Blue",
					films: ["https://swapi.dev/api/films/1/"],
					gender: "Female",
					hair_color: "Blond",
					height: "172",
					homeworld: "https://swapi.dev/api/planets/1/",
					mass: "77",
					name: "Princess Leia",
					skin_color: "Fair",
					created: "2014-12-09T13:50:51.644000Z",
					edited: "2014-12-10T13:52:43.172000Z",
					species: ["https://swapi.dev/api/species/1/"],
					starships: ["https://swapi.dev/api/starships/12/"],
					url: "https://swapi.dev/api/people/1/",
					vehicles: ["https://swapi.dev/api/vehicles/14/"]
				}
			],
			planets: [
				{
					climate: "Arid",
					created: "2014-12-09T13:50:49.641000Z",
					diameter: "10465",
					edited: "2014-12-15T13:48:16.167217Z",
					films: ["https://swapi.dev/api/films/1/"],
					gravity: "1",
					name: "Tatooine",
					orbital_period: "304",
					population: "120000",
					residents: ["https://swapi.dev/api/people/1/"],
					rotation_period: "23",
					surface_water: "1",
					terrain: "Dessert",
					url: "https://swapi.dev/api/planets/1/"
				}
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
