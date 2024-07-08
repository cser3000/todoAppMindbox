import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

import TodosPage from "../pages/TodosPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route index path={'/'} element={<TodosPage />} />
        </>
    )
)