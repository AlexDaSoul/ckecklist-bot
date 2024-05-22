import Servise from './servise.js';
import { API } from './const.js';

const servise = new Servise();

export default class Controller {
    constructor (app) {
        this.newMessage(app);
    }

    newMessage(app) {
        app.post(API.NEW_MESSAGE, async (req, res) => {
            await servise.sendMessage(req, res);
        });
    }
}