import 'whatwg-fetch'
import urlJoin from 'url-join'
import deepAssign from 'deep-assign'

export function request(url, options) {
  return fetch(urlJoin('/api', url), getRequestOptions(options))
    .then(parseResponse)
}


export const get = (url, options) => request(url, { method: 'GET', ...options })
export const put = (url, options) => request(url, { method: 'PUT', ...options })
export const post = (url, options) => request(url, { method: 'POST', ...options })
export const _delete = (url, options) => request(url, { method: 'DELETE', ...options })


function getRequestOptions(options) {
  const requestOptions = deepAssign({
    credentials: 'include',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    }
  }, options)

  if (options.body && typeof options.body === 'object') {
    requestOptions.body = JSON.stringify(options.body)
  }

  return requestOptions
}


async function parseResponse(res) {
  let data
  try {
    data = await res.clone().json()
  } catch (er) {
    data = await res.clone().text()
  }

  if (res.status < 200 || res.status >= 300) {
    const error = new Error()
    error.message = data.message || res.statusText
    error.status = res.status
    error.data = data
    throw error
  }

  return data
}
