import {FC, useState} from "react";

import * as styles from "./Header.module.css"
import Modal from "../../../../UI/Modal/Modal";
import {CreateTodo} from "./components";

type Props = {
    addTodo: (title: string, description: string) => void
}

const Header: FC<Props> = (props) => {
    const { addTodo } = props

    const [open, setOpen] = useState(false)

    const close = () => setOpen(false)

    const onClick = () => setOpen(true)

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.headerText}>Приложения списка дел</h1>
                <button className={styles.createTodo} onClick={onClick}>создать дело</button>
            </header>
            <Modal open={open} closeModal={close}>
                <CreateTodo addTodo={addTodo} close={close}/>
            </Modal>
        </>
    )
}

export default Header