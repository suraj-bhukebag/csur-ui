import {SEARCH_TRAINS, USER_SIGNIN, USER_SIGNOUT, TICKET_BOOK, USER_SIGNUP} from "../actions";

const initialState = {
       
        "trains":[]
};

const csur = (state = initialState, action) => {

	switch(action.type) {
		case SEARCH_TRAINS: return {
										...state,
										"trains":action.trains
									};

		case TICKET_BOOK : return {
									...state,
									"ticket":action.ticket
									}
		case USER_SIGNUP : return {
									...state,
									"msg":action.msg
									}

		case USER_SIGNIN : if(action.isLoggedIn) {
									return {
									...state,
									"isLoggedIn":true,
									"user":action.user
									}
							}
							else {
									return {
									...state,									
									"msg":action.msg
									}
							}

		case USER_SIGNOUT : return {"isLoggedIn":false}

		default: return initialState;
	}
	

};

export default csur;