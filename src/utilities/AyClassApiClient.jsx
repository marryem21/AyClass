const getResponse = async (response) => {
  let responseBody = response.body;

  if (responseBody) {
    if (response.headers.get('content-type') === 'application/json; charset=utf-8') {
      responseBody = await response.json();
    } else if (response.headers.get('content-type') === 'application/vnd.openxmlformats-officedocument.spreadsheetml.xlsx') {
      responseBody = await response.blob();
    } else {
      responseBody = await response.text();
    }
  }

  return {
    success: response.ok,
    body: responseBody,
    response: response,
    errorMessage: !response.ok ? responseBody || response.statusText : response.statusText,
  };
};

const executeGetRequest = async ( url) => {
  const accessToken = 'token';
  //const getUrl = sort ? `${url}&sort=${sort}` : url;

  if (accessToken) {
    const headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${accessToken}`,
    });

    return fetch(url, {
      method: 'GET',
      headers,
      mode: 'cors',
    })
      .then((response) => {
        if (!response.ok) {
          console.error(response.statusText);
        }

        return getResponse(response);
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
      });
  }

  return null;
};

const executePostRequest = async (url, entity) => {
  const accessToken = 'user.accessToken;';

  if (accessToken) {
    const headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${accessToken}`,
    });

    return fetch(url, {
      method: 'POST',
      headers,
      body: entity ? JSON.stringify(entity) : null,
      mode: 'cors',
    })
      .then((response) => {
        if (!response.ok) {
          console.error(response.statusText);
        }

        return getResponse(response);
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
      });
  }

  return null;
};

export const getAllStudents = async () => {
  const url = 'https://localhost:7223/api/Students';

  return await executeGetRequest(url);
};

export const RegisterNewStudent = async (student) => {
  const url = 'https://localhost:7223/api/Students'; // change 

  return await executePostRequest(url,student);
};
