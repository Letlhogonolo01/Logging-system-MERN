import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        employees: []
    },
    reducers: {
        getemployee : (state, action) => {
            state.employees = action.payload.map(employee => {
                return {id: employee.id, fullname: employee.fullname, email: employee.email, phone: employee.phone, position: employee.position}
            })
        },
        addemployee : (state, action) => {
            state.employees.push(action.payload)
        },
        editemployee : (state, action) => {
            const index = state.employees.findIndex(x => x.id === action.payload.id)
            state.employees[index] = {
                id: action.payload.id,
                fullname: action.payload.fullname,
                email: action.payload.email,
                phone: action.payload.phone,
                position: action.payload.position
            }
        },
        deleteemployee : (state, action) => {
            const id = action.payload.id;
            console.log(state.employees)
            state.employees = state.employees.filter(u => u._id !== id)
        }
    }
})

export const {getemployee, addemployee, editemployee, deleteemployee} = employeeSlice.actions;
export default employeeSlice.reducer;