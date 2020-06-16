import { userConstants } from '../_constants' 
import { userDetailSerVice } from '../_services'
import { alertActions } from './';
import { history } from '../_helpers';

export const userDetailAction={
    getUserById,
    createUser
}

function getUserById(id)
{
    return (dispatch) => {
        dispatch(request());

        userDetailSerVice.getUserById(id)
                        .then(
                            user => dispatch(success(user)),
                            error => dispatch(failure(error.toString()))
                        )
    }
    function request() {return { type : userConstants.GETDETAIL_REQUEST}}
    function success(user) {return { type : userConstants.GETDETAIL_SUCCESS,user}}
    function failure(error) {return {type : userConstants.GETDETAIL_FAILURE, error}}
}

function createUser(user){
    return (dispatch) =>{
        dispatch(request(user))

        userDetailSerVice.create(user)
                      .then(
                        user => { 
                            dispatch(success());
                            history.push('/users');
                            dispatch(alertActions.success('Create user successful'));
                        },
                        error => {
                            dispatch(failure(error.toString()));
                            dispatch(alertActions.error(error.toString()));
                        }
                      )
    }
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success() { return { type: userConstants.REGISTER_SUCCESS } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}