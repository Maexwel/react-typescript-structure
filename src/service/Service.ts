import axios from 'axios';

// Base class for Services
// Service are used to call remote web services (API)
export default class Service {
    protected url: string;

    constructor(url: string) {
        this.url = url;
        axios.defaults.headers = {
            "Content-Type": "application/json",
        };
    }
}