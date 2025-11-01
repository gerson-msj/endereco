import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface IError {
    message: string
    error?: Error
    statusCode?: number
}

interface IActionStatusState {
    loading: boolean
    error?: IError
}

const initialState: IActionStatusState = {
    loading: false,
    error: undefined
}

export const actionStatusSlice = createSlice({
    name: "actionStatus",
    initialState,
    reducers: {
        actionStatusLoading: (state) => {
            state.loading = true
            state.error = undefined
        },
        actionStatusCompleted: (state, action: PayloadAction<IError | undefined>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const {
    actionStatusLoading,
    actionStatusCompleted,
} = actionStatusSlice.actions

export default actionStatusSlice.reducer