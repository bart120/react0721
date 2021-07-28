import axios from "axios";
import BaseService from "./BaseService";

const url = 'https://formation.inow.fr/demo/api/v1/cars';

export default class CarsService extends BaseService {

    getCars() {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    getCarById(id) {
        return axios.get(`${url}/${id}`).then(this.promiseResolve).catch(this.promiseReject);
    }

    saveCar(car) {
        car.price = +car.price;
        car.brandID = +car.brandID;
        console.log(car);
        return axios.post(url, car).then(this.promiseResolve).catch(this.promiseReject);
    }


}