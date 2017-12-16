import fetch from 'isomorphic-fetch';

let API_URL = "localhost:8080/"

export default function callApi(endpoint, method = 'get', body) {
  let reqBody;
  let token = localStorage.getItem("token");
  if (method === 'get') {
    reqBody = {
      headers: { 'content-type': 'application/json' },
      method,
    }
  }  else {
    reqBody = {
      headers: { 'content-type': 'application/json'},
      method,
      body: JSON.stringify(body),
    }
  }

  return fetch(`${API_URL}/${endpoint}`, reqBody)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    })
    .then(
      response => response,
      error => error
    );
}
