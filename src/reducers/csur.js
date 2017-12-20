import {SEARCH_TRAINS, USER_SIGNIN, USER_SIGNOUT, TICKET_BOOK, USER_SIGNUP, USER_TICKETS, ADMIN_DAILYRES, ADMIN_DAILYSEARCH} from "../actions";

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
										"admin_dailyres": [ {"date": "01-18-1970", "Reservation Rate": 75 },
        													{"date": "01-19-1970", "Reservation Rate": 55 },
        													{"date": "01-20-1970", "Reservation Rate": 35 }]
        													
										}


		case USER_SIGNOUT : return {"isLoggedIn":false}

		default: return initialState;
	}
	

};

export default csur;