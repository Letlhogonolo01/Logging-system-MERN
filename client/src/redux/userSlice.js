import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        getUser : (state, action) => {
            state.users = action.payload.map(user => {
                return {id: user.id, fullname: user.fullname, email: user.email, phone: user.phone}
            })
        },
        addUser : (state, action) => {
            state.users.push(action.payload)
        },
        editUser : (state, action) => {
            const index = state.users.findIndex(x => x.id === action.payload.id)
            state.users[index] = {
                id: action.payload.id,
                fullname: action.payload.fullname,
                email: action.payload.email,
                phone: action.payload.phone,
            }
        },
        deleteUser : (state, action) => {
            const id = action.payload.id;
            console.log(state.users)
            state.users = state.users.filter(u => u._id !== id)
        }
    }
})

export const {getUser, addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;