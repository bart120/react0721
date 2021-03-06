import axios from "axios";
import BaseService from "./BaseService";

const url = 'https://formation.inow.fr/demo/api/v1/brands';

export default class BrandsService extends BaseService {



    getBrands() {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
        /*axios.get(url).then((resp) => {
            console.log(resp.data);
            return resp.data;
        });
        console.log("return getbrands");
        return [];*/
        /*return [
            { name: 'Audi', image: 'audi.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Renault', image: 'renault.jpg' }
        ];*/
    }

    getBrandById(id) {
        return axios.get(`${url}/${id}`).then(this.promiseResolve).catch(this.promiseReject);
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