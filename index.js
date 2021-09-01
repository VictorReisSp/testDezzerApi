const url = 'https://api.deezer.com/'

const method = 'GET'

const referrer = 'https://api.deezer.com/'
const referrerPolicy = 'strict-origin-when-cross-origin'
const mode = 'no-cors'
const credentials = 'include'

const headers = {
    'accept': '*/*',
    'accept-language': 'pt-BR,pt;q=0.9',
    'content-type': 'application/json',
}

const options = { headers, method, referrer, referrerPolicy, mode, credentials }

fetch(url, options)
.then((response) => {
    return response.json();
})
.then((myJson) => {
    console.log(myJson);
  });
