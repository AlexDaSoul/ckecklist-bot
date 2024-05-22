import Servise from './servise.js';
import { API } from './const.js';

const servise = new Servise();

export default class Controller {
    constructor (app) {
        this.sendMessage(app);
    }

    sendMessage(app) {
        app.post(API.SEND_MESSAGE, async (req, res) => {
            console.log('Init sendMessage Controller');
            await servise.sendMessage(req, res);
        });
    }
}