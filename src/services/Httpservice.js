import axios from 'axios';

const URL = process.env.VUE_APP_URL

export default {
    post(loginURL,DTO) {
        return axios({
            method: 'post',
            url: `${URL}/${loginURL}`,
            data: DTO,  
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            }       
        })
    },
}