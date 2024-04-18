import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const TIMEOUT = 2000;
function wait(time = TIMEOUT) {
    console.log('Call wait for ', time, 's');
    return new Promise((resolve) => setTimeout(resolve, time));
}

const defaultStateValue = {
    projectList: {
        loading: false,
        error: null,
        data: []
    }
};

export const initProjectListAsync = createAsyncThunk(
    'projects/initAsync',
    async () => {
        await wait();

        console.log('Return init value for list...');
        return [
            {id: 'p1', name: 'Test project #1', description: 'kekes'},
            {id: 'p2', name: 'Test project #2', description: 'kekes'},
            {id: 'p3', name: 'Test project #3', description: 'kekes'},
        ]
    }
)

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: defaultStateValue,
    reducers: {
        addProject: (state, action) => {
            setTimeout(() => {
                state.projectList.data.push(action.payload);
            }, TIMEOUT)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(initProjectListAsync.pending, (state) => {
                state.projectList.loading = true;
            })
            .addCase(initProjectListAsync.fulfilled, (state, action) => {
                state.projectList.loading = false;
                state.projectList.error = null;
                state.projectList.data = action.payload;
            })
    }
});

export const {
    addProject
} = projectsSlice.actions;

export default projectsSlice.reducer;