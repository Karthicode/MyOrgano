
import 'dotenv/config'

export const getReciepeFromSearch = async(request, response) => {

    try {
        const options = {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
            },
           

        };
        const url = new URL("https://api.spoonacular.com/recipes/complexSearch"),
        params = {apiKey:'97cf9324a63d475ea4739421b3202590', query: request.query.target.value, cuisine: request.cuisine, number:10 }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        const res = await fetch(url, options)
        const result = res.json();
        return result;
        
        
    } catch (error) {
        console.log(error.message);
    }

}

export const filterReciepesByAdvancedSearch = async (request, response) => {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apiKey': `${process.env.API_KEY}`,
        },

    };
    const url = new URL("http://api.spoonacular.com/recipes/complexSearch"),
        params = { query: request.query, cuisine: request.cuisine, number: 2 }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const res = await fetch(url, options);
    const searchResults = res.json();
    return searchResults;



}

