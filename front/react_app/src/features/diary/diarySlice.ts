import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, DEVUSER } from "../../utils/constants";

export interface DiaryState {
  status: "idle" | "loading" | "failed";
  flashMessage: string | null;
  feedback: string | null;
};

const initialState: DiaryState = {
  status: "idle",
  flashMessage: null,
  feedback: null,
};

const ENDPOINT = `${API_URL}/diary`;

// 謎の型推論エラーが出るが無視
export const sendContent = createAsyncThunk<string, string>(
  "diary/sendContent",
  async (entry: string) => {
    const response = await axios.post(`${ENDPOINT}/register`, {
      diaryData: {
        user_id: DEVUSER,
        content: entry
      },
      reqToGpt: {
        // 質問内容
        messages: [
          {
            'role': 'user',
            'content': entry
          }
        ],
      }
    });
    // 回答の取得
    return response.data;
  }
);

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContent.pending, (state) => {
        state.status = "loading";
        state.flashMessage = null;
      })
      .addCase(sendContent.fulfilled, (state, action) => {
        state.status = "idle";
        state.flashMessage = "Diary registered!";
        state.feedback = action.payload;
      })
      .addCase(sendContent.rejected, (state) => {
        state.status = "failed";
        state.flashMessage = "Registration failed.";
      });
  },
});

export default diarySlice.reducer;
