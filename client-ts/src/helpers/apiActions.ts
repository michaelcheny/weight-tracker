import { User } from "../interfaces/user.interface";

export default {
  fetchToken: async (): Promise<string> => {
    try {
      const res = await fetch("/auth-check", {
        credentials: "include",
      });
      const data = await res.json();
      return data.csrf_auth_token;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  },
  logOut: async (token: string): Promise<User> => {
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
      return error.message;
    }
  },
  register: async (token: string, user: object): Promise<User> => {
    try {
      const res = await fetch("/api/v1/users", {
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
      return error.message;
    }
  },
  logIn: async (token: string, email: string, password: string): Promise<User> => {
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
      if (!res.ok) throw new Error(res.status.toString());
      return await res.json();
    } catch (error) {
      console.log(error.message + "Invalid Credentials");
      return error.message;
    }
  },
  update: async (token: string, user: object, id: number): Promise<User> => {
    try {
      const res = await fetch(`/api/v1/users/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
        },
        body: JSON.stringify({ user }),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        console.log("Successfully Updated");
      } else {
        console.log(data.errors);
      }
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  },
};
