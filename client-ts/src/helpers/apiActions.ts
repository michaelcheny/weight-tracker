import { User } from "../interfaces/user.interface";
// interface User {
//   // id?: number;
//   activity_level: number;
//   age: number;
//   bmr: number;
//   created_at: string;
//   current_calories: number | undefined;
//   email: string;
//   first_name: string;
//   gender: string;
//   goal: number;
//   height: number;
//   id: number;
//   last_name: string;
//   macros: object[];
//   meals: object[];
//   tdee: number;
//   updated_at: string;
//   weight: number;
//   weight_histories: object[];
//   errors?: string[];
// }

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
      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error("404");
      //   console.log(`Logged in as: ${data.email}`);
      // } else {
      //   console.log(data.errors);
      // }
      return data;
    } catch (error) {
      console.log(error);
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

// export const Login = (token, email, password) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: LOGGING_IN });
//       const res = await fetch("http://localhost:3001/api/v1/login", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "X-CSRF-TOKEN": token,
//         },
//         body: JSON.stringify({ email, password }),
//         credentials: "include",
//       });
//       const data = await res.json();
//       if (!Object.keys(data).includes("error")) {
//         dispatch({
//           type: LOG_IN,
//           payload: data,
//         });
//       }
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
