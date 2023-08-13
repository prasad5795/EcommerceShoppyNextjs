/**
 * Perform a POST request to a specified URL with JSON data.
 * @async
 * @param {string} url - The URL to send the POST request to.
 * @param {Object} data - The JSON data to be sent in the request body.
 * @returns {Promise<{res: Object, status: number}>} An object containing the response data and status code.
 * @throws Will throw an error if the request fails or the response is not JSON.
 * @example
 * const postDataExample = async () => {
 *   try {
 *     const data = { username: 'john_doe', password: 'password123' };
 *     const { res, status } = await postData('/api/login', data);
 *     console.log('Response:', res);
 *     console.log('Status:', status);
 *   } catch (error) {
 *     console.error('Error:', error.message);
 *   }
 * }
 */
export async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const res = await response.json();
    return { res, status: response.status };
  } catch (error) {
    throw new Error(`Failed to perform POST request: ${error.message}`);
  }
}
