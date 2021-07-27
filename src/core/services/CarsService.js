import axios from "axios";
import BaseService from "./BaseService";

const url = 'https://formation.inow.fr/demo/api/v1/cars';

export default class CarsService extends BaseService {

    getCars() {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
    }


}