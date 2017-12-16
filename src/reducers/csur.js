import {SEARCH_TRAINS, USER_SIGNIN, USER_SIGNOUT} from "../actions";

const initialState = {
       
        "trains":[]
};

const csur = (state = initialState, action) => {

	switch(action.type) {
		case SEARCH_TRAINS: return {
										...state,
										"trains":[1,2,3,4,5]
									};

		case USER_SIGNIN : return {"isLoggedIn":true}

		case USER_SIGNOUT : return {"isLoggedIn":false}

		default: return initialState;
	}
	

};

export default csur;