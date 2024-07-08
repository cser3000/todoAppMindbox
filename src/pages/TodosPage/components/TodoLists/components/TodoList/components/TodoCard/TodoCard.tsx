import {FC} from "react";
import {Todo, TodoStatus} from "../../../../../../types/types";
import {MenuItem, Select, SelectChangeEvent} from '@mui/material';

import * as styles from "./TodoCard.module.css"

type Props = {
    todo: Todo
    changeStatus: (id: number, newStatus: TodoStatus) => void
}
const TodoCard: FC<Props> = (props) => {
    const { todo, changeStatus } = props

    const handleChange = (event: SelectChangeEvent) => {
        changeStatus(todo.id, event.target.value as TodoStatus);
    };

    return (
        <div className={styles.card}>
            <div className={styles.titleBlock}>
                <h3 className={styles.title}>{todo.title}</h3>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={todo.status}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={TodoStatus.CREATE}>{TodoStatus.CREATE}</MenuItem>
                    <MenuItem value={TodoStatus.IN_PROGRESS}>{TodoStatus.IN_PROGRESS}</MenuItem>
                    <MenuItem value={TodoStatus.FAVORITES}>{TodoStatus.FAVORITES}</MenuItem>
                    <MenuItem value={TodoStatus.IN_DONE}>{TodoStatus.IN_DONE}</MenuItem>
                </Select>
            </div>
            <div className={styles.descriptionBlock}>
                <span className={styles.description}>{todo.description}</span>
            </div>
        </div>
    )
}

export default TodoCard