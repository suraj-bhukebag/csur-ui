import * as API from '../api/ApiCaller';
import {logout} from './../helpers/auth';
export const SEARCH_TRAINS = "SEARCH_TRAINS";
export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNOUT = "USER_SIGNOUT";


export function searchTrains(data) {

	return {
		type: SEARCH_TRAINS
	}

}

export function bookTicket(data) {
	
}

export function userSignin(data) {

	console.log("user data : ", data)
	return {
		type: USER_SIGNIN
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

}