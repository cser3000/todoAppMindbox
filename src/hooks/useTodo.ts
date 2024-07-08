import {Todos, TodoStatus} from "../pages/TodosPage/types/types";
import {useState} from "react";


export const useTodo = (initTodos?: Todos) => {
    const [todos, setTodos] = useState<Todos>(initTodos)

    const addTodo = (title: string, description: string) => {
        setTodos([...todos, {
            title: title,
            description: description,
            id: todos[todos.length - 1]?.id + 1,
            status: TodoStatus.CREATE,
        }])
    }

    const changeStatus = (id: number, newStatus: TodoStatus) => {
        setTodos(todos.map((item) => {
            return item.id === id ? {...item, status: newStatus} : item
        }))
    }

    return {
        todos,
        addTodo,
        changeStatus
    }
}