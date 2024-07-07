import {ChangeEvent, FC, useState} from "react";

import * as styles from "./CreateTodo.module.css";
import {Todo} from "../../../../types/types";

type Props = {
    addTodo: (todo: Todo) => void
}

const CreateTodo: FC<Props> = (props) => {
    const { addTodo } = props

    const [todoTitle, setTodoTitle] = useState('')
    const [descriptionTodo, setDescriptionTodo] = useState('')

    const onChangeTodoTitle = (e: ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value)
    const onChangeDescriptionTodo = (e: ChangeEvent<HTMLInputElement>) => setDescriptionTodo(e.target.value)

    const onSubmit = () => addTodo({
        title: todoTitle,
        description: descriptionTodo,
        id: "asd"
    })

    return (
        <div className={styles.createTodoBlock}>
            <h2 className={styles.createTodoTitle}>Создание задачи</h2>
            <form className={styles.createTodoForm}>
                <span className={styles.createTodoFormText}>Введите название задачи:</span>
                <input
                    className={styles.createTodoFormInput}
                    type={"text"}
                    placeholder={"Введите название задачи"}
                    maxLength={100}
                    onChange={onChangeTodoTitle}/>
                <span className={styles.createTodoFormText}>Введите описание задачи:</span>
                <input
                    className={styles.createTodoFormInput}
                    type={"text"}
                    placeholder={"Введите описание задачи"}
                    maxLength={100}
                    onChange={onChangeDescriptionTodo}
                />
                <input
                    className={styles.createTodoFormSubmit}
                    type={"submit"}
                    value={"создать"}
                    onSubmit={onSubmit}
                />
            </form>
        </div>
    )
}

export default CreateTodo