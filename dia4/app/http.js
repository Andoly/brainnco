const request = (url, options) =>
  fetch(url, options)
    .then((response) => response.json())
    .catch((e) => ({ error: true, message: e.message }));

export const get = (url) => request(url);
export const post = (url, data) =>
  request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
