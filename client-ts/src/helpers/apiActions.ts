interface User {
  activity_level: number;
  age: number;
  bmr: number;
  created_at: string;
  current_calories: number | undefined;
  email: string;
  first_name: string;
  gender: string;
  goal: number;
  height: number;
  id: number;
  last_name: string;
  macros: object[];
  meals: object[];
  tdee: number;
  updated_at: string;
  weight: number;
  weight_histories: object[];
}

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
  logOut: async (token: string) => {
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
  register: async (token: string, user: object): Promise<User | string> => {
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
  logIn: async (token: string, email: string, password: string): Promise<User | any> => {
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
      console.log(data);
      if (res.ok) {
        console.log(`Logged in as: ${data.email}`);
      } else {
        console.log(data.errors);
      }
      return data;
    } catch (error) {
      console.log(error);
      // return error;
    }
  },
};
