import {FC} from "react";
import {Todos, TodoStatus} from "../../../../types/types";

import * as styles from "./TodoList.module.css"
import {TodoCard} from "./components";

type Props = {
    todos: Todos
    todoListTitle: string
    changeStatus: (id: number, newStatus: TodoStatus) => void
}

const TodoList: FC<Props> = (props) => {
    const { todos, todoListTitle, changeStatus } = props

    return (
        <div>
            <h2 className={styles.todoListTitle}>{todoListTitle}</h2>
            <div className={styles.todoList}>
                {todos.map((item) => <TodoCard key={item.id} todo={item} changeStatus={changeStatus}/>)}
            </div>
        </div>

    )
}

export default TodoList