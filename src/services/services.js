const axios = require('axios').default;

export async function fetchApiContacts() {
  try {
    const response = await axios.get(
      `https://631c93a44fa7d3264cb1b965.mockapi.io/api/contacts`
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
