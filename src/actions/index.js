import callApi from '../api/ApiCaller';
import {logout} from './../helpers/auth';
export const SEARCH_TRAINS = "SEARCH_TRAINS";
export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNOUT = "USER_SIGNOUT";
export const TICKET_BOOK = "TICKET_BOOK";
export const USER_SIGNUP = "USER_SIGNUP";

export function searchTrains(data) {

	let date = new Date(data.depDate).getTime();
	let from = data.from;
	let to = data.to;
	let depTime = data.depTime;
	let noOfPassengers = data.paxs;
	let noOfConnections = data.conn;
	let trainType = data.trainType;
	let isExact = false;
	console.log(data.isExact)
	if(data.isExact === 'on') {
		isExact = true;
	}

	let queryParam = "?from="+from+"&to="+to+"&noOfPassengers="+noOfPassengers+"&departureTime="+depTime+"&depDate="+date+"&trainType="+trainType+"&isExact="+isExact+"&noOfConnections="+noOfConnections;
	let url = "search"+queryParam;
	console.log(url)
	return (dispatch) => {
	    return callApi(url, 'get').then(res => dispatch(searchResponse(res)));
	  };
}

function searchResponse(res) {

	return {
		type: SEARCH_TRAINS,
		trains: res.searchResults
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
		ticket: res.ticket
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