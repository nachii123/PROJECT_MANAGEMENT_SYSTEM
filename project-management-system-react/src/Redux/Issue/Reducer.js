import * as actionTypes from './ActionTypes'



const initalState = {
  
    issues:[],
    loading: false,
    error: null,
    issueDetails: null
};



const issuReducer = (state = initalState, action) => {
    switch (action.type){
        case actionTypes.FETCH_ISSUES_REQUEST:
        case actionTypes.CREATE_ISSUES_REQUEST:
        case actionTypes.DELETE_ISSUE_REQUEST:
        case actionTypes.FETCH_ISSUES_BY_ID_REQUEST:
        case actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FETCH_ISSUES_SUCCESS:
            return{
                ...state,
                loading: false,
                issues: action.issues,
            };
        case actionTypes.FETCH_ISSUES_BY_ID_SUCCESS:
            case actionTypes.UPDATE_ISSUES_STATUS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    issueDetails: action.issues,
                };
        case actionTypes.CREATE_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: [...state.issues, action.issue],
            };
        case actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: state.issues.map((issue) =>
                issue.id === action.issues.is ? action.issues : issue
                ),
            };
        // case actionTypes.DELETE_ISSUE_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         issues: state.issues.filter((issue) => issue.id !== action.issueId),
        //     };
        case actionTypes.DELETE_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: state.issues.filter((issue) => issue.id !== action.issueId),
            };
        case actionTypes.FETCH_ISSUES_FAILURE:
        case actionTypes.CREATE_ISSUES_FAILURE:
        case actionTypes.DELETE_ISSUE_FAILURE:
        case actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.error,

            };
        default:
            return state;                                                            
    }
};


export default issuReducer;