import Service from "./Service";

export default class RueService extends Service {
    constructor() {
        super("http://localhost:4701/sgr/rue");
    }
}