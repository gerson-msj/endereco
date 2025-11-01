import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import endereco from "./endereco";
import sagas from "./sagas";
import actionStatus from "./actionStatus";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: combineReducers({
        endereco,
        actionStatus,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch