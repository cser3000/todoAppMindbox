import {FC} from "react";
import {Todos, TodoStatus} from "../../types/types";

import * as styles from './TodoLists.module.css'
import {TodoList} from "./components";

type Props = {
    todos: Todos
    changeStatus: (id: number, newStatus: TodoStatus) => void
}

const TodoLists: FC<Props> = (props) => {
    const { todos, changeStatus } = props

    return (
        <div className={styles.todoLists}>
            <TodoList todoListTitle={"Все дела"} todos={todos} changeStatus={changeStatus}/>
            <TodoList todoListTitle={"Избранные дела"} todos={todos.filter((item) => item.status === TodoStatus.FAVORITES)} changeStatus={changeStatus}/>
            <TodoList todoListTitle={"Дела в процессе"} todos={todos.filter((item) => item.status === TodoStatus.IN_PROGRESS)} changeStatus={changeStatus}/>
            <TodoList todoListTitle={"Выполненные дела"} todos={todos.filter((item) => item.status === TodoStatus.IN_DONE)} changeStatus={changeStatus}/>
        </div>
    )
}

export default TodoLists