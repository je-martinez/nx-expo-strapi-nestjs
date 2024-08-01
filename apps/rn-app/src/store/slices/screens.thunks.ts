import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { HomeScreenMetadata } from '../../types';
import { api } from '../../api';

const thunkActions = {
  fetchScreenById: createAction('screens/fetchScreenById'),
};

const fetchScreenById = createAsyncThunk<
  HomeScreenMetadata,
  string,
  { rejectValue: string }
>(
  thunkActions.fetchScreenById.type,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await api.getScreenByPath(id);
      return data.data[0].attributes.metadata;
    } catch (error) {
      return rejectWithValue('Failed to fetch customers');
    }
  }
);

export { fetchScreenById };
