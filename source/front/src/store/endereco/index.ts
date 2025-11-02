import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface EnderecoState {
    nome: string
    numero: string
}

const initialState: EnderecoState = {
    nome: '',
    numero: ''
}

const enderecoSlice = createSlice({
    name: "enderecos",
    initialState,
    reducers: {
        changeEndereco: (state, action: PayloadAction<{
            name: keyof EnderecoState
            value: string
        }>) => {
            const { name, value } = action.payload
            state[name] = value
        }
    }
})

export const {
    changeEndereco
} = enderecoSlice.actions

export default enderecoSlice.reducer