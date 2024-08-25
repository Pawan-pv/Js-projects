
export const Register = async (registerDATA) => {
  console.log("registerDATA==>", registerDATA);

  // "FormData" in JavaScript is an interface that allows you to construct a set of key/value pairs representing form fields and their values. It is particularly useful for sending data to a server, especially when you need to include files like images, videos, or documents alongside other textual form data in an HTTP request.
  const formData = new FormData();
formData.append('avatar', registerDATA.avatar);  // Ensure this matches 'avatar'
formData.append('coverImage', registerDATA.coverImage);  // Ensure this matches 'coverImage'
formData.append('email', registerDATA.email);
formData.append('fullName', registerDATA.fullName);
formData.append('password', registerDATA.password);
formData.append('username', registerDATA.username);
 
// console.log('avatar', registerDATA.avatar)
// console.log('avatar-formData', formData.avatar)

for (const [key, value] of formData.entries()) {
  console.log(`${key}:`, value);
}

try {
    const response = await fetch("http://localhost:8000/api/v1/users/register", {
        method: "POST",
        body: formData,
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(`API Error: ${responseBody.message}`);
    }

    console.log('Registration successful:', responseBody);

} catch (error) {
    console.error('Registration failed:', error);
}

};

export const userProfile = async () => {
  
}

export const login = async (loginForm) => {
  const pp = JSON.stringify(loginForm);
  console.log("registerDATA==>", pp);
    const response = await fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: pp,
    });
    
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(`API Error: ${errorBody.message}`);
    }
    
    const responseBody = await response.json();
    console.log("Login Response:", responseBody);
    console.log(responseBody?.data?.accessToken)
    return responseBody?.data?.accessToken; // Return responseBody instead of response
  
};


// export const getCurrentUser = async () => {
//     const response = await fetch("http://localhost:8000/api/v1/users/current-user", {
//      credentials: "include"
//     });
    
//     if (!response.ok) {
//       const errorBody = await response.json();
//       throw new Error(`API Error: ${errorBody.message}`);
//     }
    
//     const responseBody = await response.json();
//     console.log("Login Response:", responseBody);
//     return responseBody; // Return responseBody instead of response
  
// };



// export const fetchUserData = async () => {
//   const response = await fetch('http://localhost:8000/api/v1/users/current-user');
//   console.log(response?.data)
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   console.log(response)
//   return response.json();
// };

export const fetchUserData = async () => {
  const token = localStorage.getItem('accessToken'); // or get it from cookies or other storage

  const response = await fetch('http://localhost:8000/api/v1/users/current-user', {
      headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      },
      credentials: 'include', // If you're using cookies
  });

  if (!response.ok) {
      throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};
