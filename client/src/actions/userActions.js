export const fetchToken = async () => {
  const res = await fetch("http://localhost:3001/auth-check", {
    credentials: "include",
  });
  const data = await res.json();
  return data.csrf_auth_token;
};

export const logOut = async (token) => {
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
};

export const logIn = async (token, email, password) => {
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
  return data;
};

export const register = async (token, user) => {
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
};
