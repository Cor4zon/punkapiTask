import AxiosWrapper from "./AxiosWrapper";
import Storage from "./Storage";

class APIClient {
    constructor() {
        this.storage = new Storage(window.localStorage)
    }

    fetchBeers(path="https://api.punkapi.com/v2/beers/") {
        const wrapper = new AxiosWrapper(path);
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
