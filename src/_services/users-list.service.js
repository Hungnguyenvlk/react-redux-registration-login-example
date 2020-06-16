import axios from 'axios'

export const usersListService = {
    getAllUsers,
    delete : _delete
}
function getAllUsers() {
    return axios.get('http://api.unikorn.tk/api/v1/user',{
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE1OTIyOTc0MzksImV4cCI6MTU5MjI5OTIzOX0.1HBUtKvVO9qrECv5fI28elzJCETW8l2q99u2nu9VM8'
        }
    }).then(handleResponse);
}
function  _delete(id)
{
    return axios.delete(`http://api.unikorn.tk/api/v1/user/${id}`,{
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE1OTIzMDA1MjMsImV4cCI6MTU5MjMwMjMyM30.X-qFNrit4dinFcrdg3Xd-MvDPpgfshQ5YntWsKT50oI'
        }
    }).then(handleResponse);
}
function handleResponse(response){
    if(response.data.success){
        return response.data.items;
    }

}