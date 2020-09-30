import httpservice from './Httpservice';

class FundooService {

    getUserLogin(loginDetails) {
        return httpservice.post('user/login',loginDetails)
    }
}

export default new FundooService