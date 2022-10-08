export default {
    async loadPlanets(context, payload) {
        // test getting context and payload
        // console.log(context);
        // console.log(payload);

        const planets = [];

        // -------------------------------------------
        // function to load pages recursively
        let loadPlanetPage = async pageUrl => {
            //loadPlanetPage (async pageUrl => {
            const response = await fetch(pageUrl);
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch!');
                throw error;
            }

            // 1) push all
            // planets.push(...responseData.results);

            // 2) get each planet and format / extract desired data
            for (const key in responseData.results) {
                // manipulate things, date, etc
                const dateCreatedRaw = new Date(responseData.results[key].created);
                const dateCreatedFormatted = `${dateCreatedRaw.getDay()} / ${dateCreatedRaw.getMonth()} / ${dateCreatedRaw.getFullYear()}`;

                const planet = {
                    id: 'planet_' + planets.length,
                    name: responseData.results[key].name,
                    climate: responseData.results[key].climate,
                    diameter: responseData.results[key].diameter,
                    orbital_period: responseData.results[key].orbital_period,
                    created: dateCreatedFormatted,
                    population: responseData.results[key].population,
                    rotation_period: responseData.results[key].rotation_period,
                    surface_water: responseData.results[key].surface_water,
                    terrain: responseData.results[key].terrain
                };

                planets.push(planet);
            }

            if (responseData.next) {
                // force http:// string to secure url to avoid cross origin problems
                // const urlPageSecure = responseData.next.replace('http', 'https');
                await loadPlanetPage(responseData.next);
            } else {
                // finish process, all pages loaded
                // call mutation and update planet list state
                context.commit('setPlanets', planets);
            }
        };

        // start loading DATA recursively, start with first page
        await loadPlanetPage('https://swapi.dev/api/planets/?format=json');
    }
};
