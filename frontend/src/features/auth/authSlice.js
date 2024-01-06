import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

//Register new user from dispatch of Registar page
export const register = createAsyncThunk(
	"auth/register",
	async (user, thunkAPI) => {
		console.log(user);
	}
);

//Login user from dispatch of Login page
export const login = createAsyncThunk(
	"auth/login",
	async (user, thunkAPI) => {
		console.log(user);
	}
);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	redicers: {},
	extraReducers: (builder) => {},
});

export default authSlice.reducer;
