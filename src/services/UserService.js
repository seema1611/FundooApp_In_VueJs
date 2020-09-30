import httpservice from './Httpservice';

class FundooService {

    getUserLoggedIn(loginData) {
        return httpservice.post('user/login',loginData)
    }
}

export default new FundooService