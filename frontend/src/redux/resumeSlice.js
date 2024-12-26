import {createSlice} from '@reduxjs/toolkit';

const resumeSlice = createSlice({
    name: 'resume',
    initialState : {
        userData:{},
        selectedTemplate: '',
    },
    reducers:{
        setUserData: (state, action)=>{
            state.userData = action.payload;
        },
        setSelectedTemplate:(state, action)=>{
            state.selectedTemplate = action.payload;
        },
    },
});

export const { setUserData, setSelectedTemplate } = resumeSlice.actions;
export default resumeSlice.reducer;