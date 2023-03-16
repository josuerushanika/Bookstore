import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import bookList from '../../bookList';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/q8kjbUtPhPhbIN9tNQtv';

export const postBook = createAsyncThunk('books/postBook',
  async (bookData, thunkApi) => {
    try {
      const resData = await axios.post(`${url}`, bookData);
      return resData.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.data?.message || 'something went wrong');
    }
  });

  
const initialState = {
  bookList,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;

      const newBook = {
        item_id: `item${state.bookList.length + 1}`,
        title,
        author,
      };
      // eslint-disable-next-line no-param-reassign
      state.bookList = [...state.bookList, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookList: state.bookList.filter((book) => book.item_id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
