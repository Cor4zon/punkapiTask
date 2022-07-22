class Storage {
    constructor(storage) {
        this.storage = storage;
    }

    get(key) {
        this.storage.getItem(key);
    }

    clear() {
        this.storage.clear();
    }
}

export default Storage;
