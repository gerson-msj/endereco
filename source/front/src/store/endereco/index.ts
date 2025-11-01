import { createSlice } from "@reduxjs/toolkit";

interface EnderecoState {
    ceps: string[]
}

const initialState: EnderecoState = {
    ceps: []
}

const enderecoSlice = createSlice({
    name: "enderecos", 
    initialState, 
    reducers: {}
})

export default enderecoSlice.reducer