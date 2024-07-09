import {ChangeEvent, FC, useState} from "react";

import * as styles from "./CreateTodo.module.css";

type Props = {
    addTodo: (title: string, description: string) => void
    close: () => void
}

const CreateTodo: FC<Props> = (props) => {
    const { addTodo, close } = props

    const [todoTitle, setTodoTitle] = useState('')
    const [descriptionTodo, setDescriptionTodo] = useState('')

    const onChangeTodoTitle = (e: ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value)
    const onChangeDescriptionTodo = (e: ChangeEvent<HTMLInputElement>) => setDescriptionTodo(e.target.value)

    const onSubmit = (e: any) => {
        e.preventDefault()
        addTodo(todoTitle, descriptionTodo)
        close()
    }

    return (
        <div className={styles.createTodoBlock}>
            <h2 className={styles.createTodoTitle}>Создание задачи</h2>
            <form className={styles.createTodoForm} onSubmit={onSubmit}>
                <span className={styles.createTodoFormText}>Введите название задачи:</span>
                <input
                    className={styles.createTodoFormInput}
                    type={"text"}
                    placeholder={"Введите название задачи"}
                    maxLength={100}
                    value={todoTitle}
                    onChange={onChangeTodoTitle}/>
                <span className={styles.createTodoFormText}>Введите описание задачи:</span>
                <input
                    className={styles.createTodoFormInput}
                    type={"text"}
                    placeholder={"Введите описание задачи"}
                    maxLength={100}
                    value={descriptionTodo}
                    onChange={onChangeDescriptionTodo}
                />
                <input
                    className={styles.createTodoFormSubmit}
                    type={"submit"}
                    value={"создать"}
                />
            </form>
        </div>
    )
}

export default CreateTodo