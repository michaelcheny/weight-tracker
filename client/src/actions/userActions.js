export const fetchToken = async () => {
  try {
    const res = await fetch("/auth-check", {
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
    const res = await fetch("/logout", {
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
    const res = await fetch("/login", {
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
    const res = await fetch("/v1/users", {
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
