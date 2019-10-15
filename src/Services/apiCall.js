import fetch from "cross-fetch";

export function apiCall(url, method, data) {
  return new Promise((resolve, reject) => {
    fetch(url + `?range=${data}`)
      .then(response => {
        if (response.status > 202) {
          return reject({ error: response.statusText });
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(err => reject({ error: err.message }));
  });
}
//Only for JSON type data
/*  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
     .then(response => {
        if (response.status >= 200 && response.status < 300)
          reject({
            error: {
              message: response.statusText
            }
          });
      })
      .then(result => resolve(result.json()))
      .catch(err =>
        reject({
          error: {
            message: err.message
          }
        })
      );
  });
}
*/
