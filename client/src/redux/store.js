import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import employeeSlice from './employeeSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        employee : employeeSlice
    }
})

export default store;