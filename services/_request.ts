export const request = (url: RequestInfo, options: RequestInit | undefined) => {
  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => reject(error))
      }

      resolve(response.json())
    })
  })
}
