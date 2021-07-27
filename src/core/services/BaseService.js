export default class BaseService {
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