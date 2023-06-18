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

export async function postActivities(token, name, description) {
  try {
    const response = await fetch(`${BASE_URL}/api/activities`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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


export async function postRoutine(token, name, goal, isPublic) {
  try {
    const response = await fetch(`${BASE_URL}/api/routines`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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

export async function editRoutine(token, routineId, name, goal, isPublic) {
  try {
    const response = await fetch(`${BASE_URL}/api/routines/${routineId}`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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

export async function addRoutineActivity(routineId, activityId, count, duration)  {
  try {
    const response = await fetch(`${BASE_URL}/api/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activityId,
        count, 
        duration
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
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

export async function userMe(token) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    // console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
}


// struggled with issues of token not reading correctly, moved to myroutines component  

// export async function userRoutine(token, username) {
//   console.log(username)
//   try {
//     const response = await fetch(`${BASE_URL}/api/users/${username}/routines}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (error) {
//     console.error(error);
//   }
// }

//////

