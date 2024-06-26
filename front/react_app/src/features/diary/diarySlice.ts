import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface DiaryState {
  entries: string[];
  status: "idle" | "loading" | "failed";

  message: string | null;
}

const initialState: DiaryState = {
  entries: [],
  status: "idle",
  message: null,
};

// 謎の型推論エラーが出るが無視
export const addEntry = createAsyncThunk<string, string>(
  "diary/addEntry",
  async (entry: string) => {
    const response = await axios.post("http://localhost:3000/diaries", {
      entry,
    });
    return response.data;
  }
);

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEntry.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(addEntry.fulfilled, (state, action) => {
        state.status = "idle";
        state.entries.push(action.payload);
        state.message = "日記が送信されました！";
      })
      .addCase(addEntry.rejected, (state) => {
        state.status = "failed";
        state.message = "送信に失敗しました。";
      });
  },
});

export default diarySlice.reducer;
