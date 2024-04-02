// services/authService.js
const API_URL = 'https://reqres.in/api';

async function signIn(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    // If successful, return user data
    return data;
  } else {
    // If failed, throw an error with error message
    throw new Error(data.error);
  }
}

async function signUp(email, password) {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    // If successful, return user data
    return data;
  } else {
    // If failed, throw an error with error message
    throw new Error(data.error);
  }
}

export { signIn, signUp };
