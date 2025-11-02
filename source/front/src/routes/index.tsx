import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import New from "../pages/New";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novo" element={<New />} />
        </Routes>
    );
}