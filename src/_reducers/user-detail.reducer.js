import { userConstants } from "../_constants";

export function userDetail(state = {}, action) {
  switch (action.type) {
    case userConstants.GETDETAIL_REQUEST:
      return {
        loading: true,
        items: null,
        error: null,
      };
    case userConstants.GETDETAIL_SUCCESS:
      return {
        loading: false,
        items: action.user,
        error: null,
      };
    case userConstants.GETDETAIL_FAILURE:
      return {
        loading: false,
        items: null,
        error: action.error,
      };
    case userConstants.CREATE_REQUEST:
      return { creating: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
