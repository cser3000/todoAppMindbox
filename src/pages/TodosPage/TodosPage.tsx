import { FC } from "react";
import { Header, TodoLists } from "./components";
import { TodoStatus} from "./types/types";
import { useTodo } from "../../hooks/useTodo";


const TodosPage: FC = () => {
    const {todos, addTodo, changeStatus} = useTodo([
        {
            title: '1',
            description: '1',
            id: 1,
            status: TodoStatus.CREATE,
        },
        {
            title: '2',
            description: '2',
            id: 2,
            status: TodoStatus.CREATE,
        },
        {
            title: '3',
            description: '3',
            id: 3,
            status: TodoStatus.CREATE,
        },
    ])

    return (
        <>
            <Header addTodo={addTodo}/>
            <TodoLists todos={todos} changeStatus={changeStatus}/>
        </>

    )
}

export default TodosPage