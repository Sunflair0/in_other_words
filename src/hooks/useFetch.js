export default function useFetch(method) {
  async function callAPI(url, body = null) {
    let opts = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) {
      opts = { ...opts, body: JSON.stringify(body) };
    }
    try {
      const response = await fetch(url, opts);
      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        throw response;
      }
    } catch (e) {
      return { error: "Something went wrong, please try again later" };
    }
  }
  // Exposes the data, any error, and whether or not it was loading
  return { callAPI };
}
