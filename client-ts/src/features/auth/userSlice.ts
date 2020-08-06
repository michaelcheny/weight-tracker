import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (loginInfo: LoginAttributes) => {
    const { token, email, password } = loginInfo;
    const userData = await userApi.logIn(token, email, password);
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
      return (state = action.payload);
    });
  },
});

export const { setUser } = user.actions;
export default user.reducer;
