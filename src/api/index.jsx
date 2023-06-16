export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com"

//activities
export async function getAllActivities() {
  try {
    const response = await fetch(`${BASE_URL}/api/activities`);  
    const result = await response.json();
    // console.log(result)  
    return result
  } catch (error) {
    console.error(error);  
  }
}  

export async function postActivities(storedToken, name, description) {
  try {
    const response = await fetch(`${BASE_URL}/api/activities`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${storedToken}`
      },
      body: JSON.stringify({
        name,
        description
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
}

//////

//routines
export async function getAllRoutines() {
    try {
      const response = await fetch(`${BASE_URL}/api/routines`);  
      const result = await response.json();
      // console.log(result)  
      return result
    } catch (error) {
      console.error(error);  
    }
}  


export async function postRoutine(storedToken, name, goal, isPublic) {
  try {
    const response = await fetch(`${BASE_URL}/api/routines`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${storedToken}`
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
}
    
//////

//users
export async function userRegister(username, password) {
  try {
const response = await fetch(
  `${BASE_URL}/api/users/register`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      username,
      password,
  })
});
const result = await response.json();
  // console.log(result)
return result
} catch (error) {
  console.error(error);
}
}

export async function userLogin(username, password) {
  try {
    const response = await fetch(
      `${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username,
          password,
      })
    });
    const result = await response.json();
    // console.log(result)
    return result
  } catch (error) {
    console.error(error);
  }
}

export async function userMe(storedToken) {
  try {
    // console.log(storedToken)
    const response = await fetch(`${BASE_URL}/api/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${storedToken}`
      },
    });
    const result = await response.json();
    // console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
}
//////

