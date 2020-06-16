import axios from 'axios'

export const userDetailSerVice = {
    getUserById,
    create
}
function getUserById(id) {
    return axios.get(`http://api.unikorn.tk/api/v1/user/${id}`,{
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE1OTIyODk0MzcsImV4cCI6MTU5MjI5MTIzN30.7kRQ9KWCIoGlnn_TWhmsTZ8g39Q2DNMOvF0lb9XQ6ZU'
        }
    }).then(handleResponse);
}
function create(user)
{
    return axios.post(`https://5edefbf5e36dd000166c87a1.mockapi.io/api/v1/users`,user).then(handleResponse);
}
function handleResponse(response){
    if(response.status){
        return response.data;
    }
}