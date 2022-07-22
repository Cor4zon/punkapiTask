import AxiosWrapper from "./AxiosWrapper";
import Storage from "./Storage";

class APIClient {
    constructor() {
        this.storage = new Storage(window.localStorage)
    }

    fetchBeerById(id="") {
        const wrapper = new AxiosWrapper(`https://api.punkapi.com/v2/beers/${id}`);
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }


    fetchBeers(pageNumber) {
        // change per_page to load more items
        const wrapper = new AxiosWrapper(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=10`);
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }
    fetchBeerByName(beerName) {
        const wrapper = new AxiosWrapper(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`);
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }

}

export default APIClient;
