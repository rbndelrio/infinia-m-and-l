//
// Importing a snippet I wrote a while back
//

export const get = async (path = '', params = '', options = {}) => {
  let res = {}, status = 500, error = false;

  try {
    res = await fetch(
      `${API_HOST}/${path.replace(/^\//, '')}`,
      {
        method: 'GET',
        body: new URLSearchParams(params),
        ...options,
      }
    )
    status = res.status

  } catch (err) {
    error = err
  }

  return {
    res,
    status,
    error
  }
}

export const $get = async (path = '', params = '', options = {}) => {
  let response, data = {}

  try {
    const { res, status, error } = await get(path, params, options)
    if (error) console.warn('$get issue: ', status, error)
    response = res
  } catch (err) {
    response = {}
    console.log('$get error: ', err)
  }


  try {
    data = response.json?.() || {}
  } catch (err) {
    console.log('$get json error: ', err)
  }

  return data
}