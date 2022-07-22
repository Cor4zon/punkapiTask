import axios from "axios";

class AxiosWrapper {
    constructor(path) {
        this.path = path;
    }

    get() {
        return Promise.resolve(
            axios.get( this.path )
        )
    }
}

export default AxiosWrapper;
