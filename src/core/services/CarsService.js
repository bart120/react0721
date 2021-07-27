import axios from "axios";

const url = 'https://formation.inow.fr/demo/api/v1/cars';

export default class CarsService {

    getCars() {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    promiseResolve(resp) {
        if (resp.data == null) {
            return Promise.reject('La ressource est introuvable');
        }
        return Promise.resolve(resp.data);
    }

    promiseReject(err) {
        alert(err.message);
        return Promise.reject(err);
    }
}