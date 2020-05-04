export const fetchToken = async () => {
  try {
    const res = await fetch("http://localhost:3001/auth-check", {
      credentials: "include",
    });
    const data = await res.json();
    return data.csrf_auth_token;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async (token) => {
  try {
    const res = await fetch("http://localhost:3001/logout", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": token,
      },
      credentials: "include",
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (token, email, password) => {
  try {
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": token,
      },
      body: JSON.stringify({ user: { email, password } }),
      credentials: "include",
    });
    const data = await res.json();
    if (res.ok) {
      console.log(`Logged in as: ${data.email}`);
    } else {
      console.log(data.errors);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (token, user) => {
  try {
    const res = await fetch("http://localhost:3001/v1/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": token,
      },
      body: JSON.stringify({ user }),
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
