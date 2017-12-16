import {SEARCH_TRAINS} from "../actions";

const initialState = {
       
        "trains":[]
};

const csur = (state = initialState, action) => {

	switch(action.type) {
		case SEARCH_TRAINS: return {"trains":[1,2,3,4,5]};

		default: return initialState;
	}
	

};

export default csur;