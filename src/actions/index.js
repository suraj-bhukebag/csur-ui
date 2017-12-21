import callApi from '../api/ApiCaller';
import {logout} from './../helpers/auth';
export const SEARCH_TRAINS = "SEARCH_TRAINS";
export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNOUT = "USER_SIGNOUT";
export const TICKET_BOOK = "TICKET_BOOK";
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_TICKETS = "USER_TICKETS";
export const ADMIN_DAILYRES = "ADMIN_DAILYRES";
export const ADMIN_DAILYSEARCH = "ADMIN_DAILYSEARCH";
export const SYSTEM_RESET = "SYSTEM_RESET";
export const TRAIN_RES_RATE = "TRAIN_RES_RATE";
export const SEARCH_DATA = "SEARCH_DATA";

export function searchTrains(data) {

	console.log("dd ", data.depDate)
	let date = new Date(data.depDate).getTime()+300000;
	let from = data.from;
	let to = data.to;
	let depTime = data.depTime;
	let noOfPassengers = data.paxs;
	let noOfConnections = data.conn;
	let trainType = data.trainType;
	let isExact = false;


	let date = new Date();
	let dd = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();

	let d = new Date(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
	let today = d.getTime();
	console.log(data.isExact)
	if(data.isExact === 'on') {
		isExact = true;
	}

	let queryParam = "?from="+from+"&to="+to+"&noOfPassengers="+noOfPassengers+"&departureTime="+depTime+"&depDate="+date+"&trainType="+trainType+"&isExact="+isExact+"&noOfConnections="+noOfConnections+"?today="+today;
	let url = "search"+queryParam;
	console.log(url)
	return (dispatch) => {
	    return callApi(url, 'get').then(res => dispatch(searchResponse(res)));
	  };
}

function searchResponse(res) {

	return {
		type: SEARCH_TRAINS,
		trains: res.searchResults,
		msg: res.msg
	}
}

export function bookTicket(data) {
	
	return (dispatch) => {
	    return callApi(data.bookedBy+"/booked", 'post', data).then(res => dispatch(bookingResponse(res)));
	  };
}

function bookingResponse(res) {
	return {
		type: TICKET_BOOK,
		ticket: res.ticket,
		msg: res.msg
	}
}

export function userSignin(data) {
	let email = "";
	let mode = "none";

	if(localStorage.getItem("email") !== null) {
		email = localStorage.getItem("email");
		localStorage.removeItem("email");
		mode = "notnone";
	}	
	else {
		email = data.semail;
	}
	data.email = email;
	console.log("email ", data)
	return (dispatch) => {
	    return callApi("signin/"+mode, 'post', data).then(res => dispatch(signInResponse(res)));
	  };
	

}

function signInResponse(res) {
	if(res.code === 200) {
		return {
		type: USER_SIGNIN,
		user: res.user,
		isLoggedIn:true
		}
	}
	else {
		return {
		type: USER_SIGNIN,
		msg: res.msg
		}

	}
	
}

export function userSignout(data) {

	console.log("user data : ", data)
	logout();

	return {
		type: USER_SIGNOUT
	}

}

export function userSignup(data) {

return (dispatch) => {
	    return callApi("signup", 'post', data).then(res => dispatch(signUpResponse(res)));
	  };
	
}

function signUpResponse(res) {
	return {
		type: USER_SIGNUP,
		msg:res.msg
	}
}

export function userTickets(data, msg) {
	return (dispatch) => {
	    return callApi(data+"/booked", 'get').then(res => dispatch(userTicketsResponse(res, msg)));
	  };
}

function userTicketsResponse(res, msg) {
	return {
		type: USER_TICKETS,
		tickets:res.tickets,
		msg: msg
	}
}

export function handleTicketCancel(data, user) {

	let date = new Date();
	let dd = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();

	let d = new Date(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
	console.log(dd);
	return (dispatch) => {
	    return callApi("cancel/"+data+"/"+d.getTime(), 'post', data).then(res => dispatch(userTickets(user, res.msg)));
	  };
}

export function dailyReservation(data) {
	let from = new Date(data.from).getTime();
	let to = new Date(data.to).getTime();

	return (dispatch) => {
	    return callApi("dailyReservationReport?from="+from+"&to="+to, 'get').then(res => dispatch(dailyReservationResponse(res)));
	  };

	
}

function dailyReservationResponse(res) {
	return {
		type: ADMIN_DAILYRES,
		report: res.dailyReservationRates
	}
}


export function handleDailySearch(data) {
	let date = new Date(data.date).getTime();
	
	return (dispatch) => {
	    return callApi("dailySearchCountReport?date="+date, 'get').then(res => dispatch(handleDailySearchOne(date, res)));
	  };
}

function handleDailySearchOne(date, countRes) {
	return (dispatch) => {
	    return callApi("dailySearchPercentageReport?date="+date, 'get').then(res => dispatch(handleDailySearchTwo(date, countRes, res)));
	  };
}

function handleDailySearchTwo(date, countRes, connRes) {
		return (dispatch) => {
			    return callApi("dailySearchLatencyReport?date="+date, 'get').then(res => dispatch(handleDailySearchResult(countRes, connRes, res)));
			  };
}

function handleDailySearchResult(countRes, connRes, res) {
	return {
		type: SEARCH_DATA,
		searchCounts: countRes[0],
		connectionCount: connRes.dailySearchPercentages,
		latency: res.dailySearchLatencies
	}

}

export function clearData(data) {
	return (dispatch) => {
	    return callApi("clear", 'post', data).then(res => dispatch(resetResponse(res)));
	  };
}
 function resetResponse(res) {
	return {
		type: SYSTEM_RESET,
		msg: res.msg
	}
}

export function trainReservationRate() {
	return (dispatch) => {
	    return callApi("trainReservationReport", 'get').then(res => dispatch(trainReservationRateResponse(res)));
	  };
}

function trainReservationRateResponse(res) {
	return {
		type: TRAIN_RES_RATE,
		report: res.trainReservationRate
	}
}