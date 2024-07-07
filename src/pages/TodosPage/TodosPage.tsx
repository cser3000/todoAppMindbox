import {FC, useState} from "react";
import {Header, TodoLists} from "./components";
import {Todo, Todos} from "./types/types";


const TodosPage: FC = () => {
    const [todos, setTodos] = useState<Todos>([])

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo])
    }

    console.log(todos)
    return (
        <>
            <Header addTodo={addTodo}/>
            <TodoLists todos={todos}/>
        </>

    )
}

export default TodosPage