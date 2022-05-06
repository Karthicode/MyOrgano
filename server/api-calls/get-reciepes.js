import axios from 'axios'
export const getReciepeFromSearch = async (request, response) => {
    const apiKey = 'XdeIr40LP8EzOnmkfbrSyJPrtnnljCETsUEtUKO28ESJ4ttFrmoF4zyPPWhLJRTp';
   
   try { 
       axios.get('https://api.spoonacular.com/recipes/complexSearch',
       { 
        params : { apiKey: `${apiKey}`,query: request.query, cuisine: request.cuisine, number: 2  }

    })
    .then((response) => {
        console.log(response.data);
        return response;
    })
        
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
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch"),
        params = { query: request.query, cuisine: request.cuisine, number: 2 }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const res = await fetch(url, options);
    const searchResults = res.json();
    return searchResults;



}

