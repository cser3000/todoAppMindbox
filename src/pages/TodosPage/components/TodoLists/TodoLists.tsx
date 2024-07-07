import {FC} from "react";
import {Todos} from "../../types/types";

type Props = {
    todos: Todos
}

const TodoLists: FC<Props> = (props) => {
    const { todos } = props

    return (
        <div>
            {todos.map((item) => <div key={item.id}>{item.title}</div>)}
        </div>
    )
}

export default TodoLists