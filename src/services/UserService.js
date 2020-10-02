import httpservice from './Httpservice';

class UserService {

    getUserLogin(loginDetails) {
        return httpservice.post('user/login',loginDetails)
    }
}

export default new UserService