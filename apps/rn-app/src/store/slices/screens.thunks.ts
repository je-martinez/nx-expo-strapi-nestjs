import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { HomeScreenMetadata } from '@h4vnt3r/shared-types';

const thunkActions = {
  fetchScreenByPath: createAction('screens/fetchScreenByPath'),
};

const fetchScreenByPath = createAsyncThunk<
  HomeScreenMetadata,
  string,
  { rejectValue: string }
>(
  thunkActions.fetchScreenByPath.type,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await api.getScreenByPath(id);
      return data.data[0].attributes.metadata;
    } catch (error) {
      return rejectWithValue('Failed to fetch customers');
    }
  }
);

export { fetchScreenByPath };
