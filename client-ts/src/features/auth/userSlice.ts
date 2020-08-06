import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  // AsyncThunkPayloadCreator,
} from "@reduxjs/toolkit";
import { User } from "../../interfaces/user.interface";
import userApi from "../../helpers/apiActions";

interface LoginError {
  errorMessage: string;
}

interface LoginAttributes {
  token: string;
  email: string;
  password: string;
}

// const userInitialState = {
//   data: {},
//   status: "idle",
//   error: {},
// };

export const fetchUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (loginInfo: LoginAttributes) => {
    const { token, email, password } = loginInfo;
    const userData = await userApi.logIn(token, email, password);
    console.log(userData);
    return userData as User;
  }
);

const user = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    setUser(state, { payload }: PayloadAction<User | null>) {
      return (state = payload != null ? payload : null);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      // if (Object.keys(action.payload).includes("errors")) state?.errors.push(action.payload);

      return (state = action.payload);
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      return state?.errors?.push(action.payload);
    });
  },
});

export const { setUser } = user.actions;
export default user.reducer;
