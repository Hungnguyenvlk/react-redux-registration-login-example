import { userConstants } from '../_constants' 
import { usersListService } from '../_services'

export const usersListAction = { 
    getAllUsers,
    delete : _delete
}
function getAllUsers() {
    return (dispatch) => {
        dispatch(request()); 
        
        usersListService.getAllUsers()
                        .then(
                            users => dispatch(success(users)),
                            error=> dispatch(failure(error.toString()))
                        )
    }
    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users){return { type : userConstants.GETALL_SUCCESS, users}}
    function failure(error){ return {type : userConstants.GETALL_FAILURE, error}}
}

function _delete(id)
{
    return (dispatch) =>{
        dispatch(request(id));

        usersListService.delete(id)
                        .then(
                            user => dispatch(success(id)),
                            error => dispatch(failure(id,error.toString()))
                        )
    }
    function request(id) { return { type: userConstants.DELETE_REQUEST,id } }
    function success(id){return { type : userConstants.DELETE_SUCCESS, id}}
    function failure(id,error){ return {type : userConstants.DELETE_FAILURE, id,error}}
}