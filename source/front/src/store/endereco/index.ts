import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { EnderecoDefault, type IEndereco } from "../../types";

export interface EnderecoState {
    endereco: IEndereco
}

const initialState: EnderecoState = {
    endereco: EnderecoDefault
}

const enderecoSlice = createSlice({
    name: "enderecos",
    initialState,
    reducers: {
        changeEndereco: <k extends keyof IEndereco>(
            state: EnderecoState,
            action: PayloadAction<{
                name: k
                value: IEndereco[k]
            }>) => {
            const { name, value } = action.payload
            state.endereco[name] = value
        }
    }
})

export const {
    changeEndereco
} = enderecoSlice.actions

export default enderecoSlice.reducer