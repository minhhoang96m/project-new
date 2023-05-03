import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { auth } from "~/config/firebase.ts"


interface AuthState {
  user: string | null
  token: string | undefined
  isLoading: boolean
  error: string | null
  email: string | null
  photoURL: string | null
}

const initialState: AuthState = {
  user: null,
  token: undefined,
  isLoading: false,
  error: null,
  email: null,
  photoURL: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      // state.token = action.payload.token
      state.user = action.payload.user
      state.isLoading = action.payload.isLoading
      state.error = action.payload.error
      state.email = action.payload.email
      state.photoURL = action.payload.photoURL
    },
  },
  extraReducers: (builder) => {
    builder.addCase(token.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(token.rejected, (state, action) => {
      console.log(action, state);
    })
    builder.addCase(token.fulfilled, (state, action) => {
      // state.token = action.payload
      // console.log(state)
      console.log(action.payload);
    })
  },
})

export const { SET_ACTIVE_USER } = authSlice.actions

export default authSlice.reducer

export const token = createAsyncThunk("auth/token", async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User is not logged in');
    }
    const token = await user.getIdToken();
    return { token }
  } catch (error) {
    console.log(error);
  }
})
