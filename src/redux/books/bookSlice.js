import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import bookList from '../../bookList';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/q8kjbUtPhPhbIN9tNQtv';

export const postBook = createAsyncThunk('books/postBook',
  async (bookData, thunkApi) => {
    try {
      const resData = await axios.post(`${url}/books`, bookData);
      return resData.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.data?.message || 'something went wrong');
    }
  });

export const getBooks = createAsyncThunk('books/getBook',
  async (__, thunkApi) => {
    try {
      const res = await axios(`${url}/books`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.data?.message || 'something went wrong');
    }
  });

export const deleteBook = createAsyncThunk('books/deleteBook', async (id, thunkApi) => {
  try {
    const res = await axios.delete(`${url}/books/${id}`);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      error?.data?.message || 'Something went wrong',
    );
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
  extraReducers: (builder) => {
    builder.addCase(postBook.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    });
    .addCase(postBook.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(postBook.rejected, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(getBooks.fulfilled, (state, action) =>{
        state.isLoading = false;
        const resData = action.payload;
        const newBookArray = Object.keys(resData).map((id) =>{
          state.isLoading = false;
          const resData = action.payload;
          const newBookArray = Object.keys(resData).map(id) =>
        })
        state.books = newBookArray;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const booksActions = bookSlice.actions;
export default bookSlice.reducer;
