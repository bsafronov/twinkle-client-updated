import { UploadImageProps } from "@/02.components/PostForm/PostForm";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostFormProps {
  text: string;
  audio: File[];
  image: UploadImageProps[];
}

const initialState: PostFormProps = {
  text: "",
  audio: [],
  image: [],
};

export const postFormSlice = createSlice({
  name: "postForm",
  initialState,
  reducers: {
    addImage(state, action: PayloadAction<UploadImageProps>) {
      state.image = [...state.image, action.payload];
    },
  },
});

export default postFormSlice.reducer;
