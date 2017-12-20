import {SEARCH_TRAINS, USER_SIGNIN, USER_SIGNOUT, TICKET_BOOK, USER_SIGNUP, USER_TICKETS, ADMIN_DAILYRES, ADMIN_DAILYSEARCH, SYSTEM_RESET, TRAIN_RES_RATE, SEARCH_DATA} from "../actions";

const initialState = {
       
        "trains":[]
};

const csur = (state = initialState, action) => {

	switch(action.type) {
		case SEARCH_TRAINS: return {
										...state,
										"trains":action.trains,
										"searchMsg":action.msg
									};

		case TICKET_BOOK : return {
									...state,
									"ticket":action.ticket,
									"msg":action.msg
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
		case USER_TICKETS : return {
										...state,
										"tickets": action.tickets,
										msg: action.msg
									}

		case ADMIN_DAILYSEARCH : return {
											...state,
											"dailySearchCounts": [
													        {
													            "date": "01-18-1970",
													            "No of Search Requests": 115
													        },
													        {
													            "date": "01-19-1970",
													            "No of Search Requests": 76
													        },
													         {
													            "date": "01-20-1970",
													            "No of Search Requests": 42
													        }
													    ]
										}

		case ADMIN_DAILYRES : return {
										...state,
										"report2": action.report
        													
										}

		case SYSTEM_RESET: return {
									...state,
									"systemReset": action.msg
									}

		case TRAIN_RES_RATE: return {
										...state,
										"report1":action.report
									}

		case SEARCH_DATA: return {
									...state,
									"searchCounts": action.searchCounts,
									"connectionCount": action.connectionCount,
									"latency": action.latency
									}

		case USER_SIGNOUT : return {"isLoggedIn":false}

		default: return initialState;
	}
	

};

export default csur;