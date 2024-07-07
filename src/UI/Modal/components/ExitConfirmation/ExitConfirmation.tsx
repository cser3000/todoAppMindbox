import { FC } from 'react'

import { CURRENT_ACTION, contentDependingOnAction } from '../../data/models'

import * as styles from './ExitConfirmation.module.css'

type Props = {
  actionType:CURRENT_ACTION
  closeAllModal:()=>void
  closeExitConfirmation:()=>void
}

const ExitConfirmation: FC<Props> = ({ closeAllModal,closeExitConfirmation,actionType }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <header className={styles.title}>{contentDependingOnAction[actionType].title}</header>
        <span className={styles.description}>{contentDependingOnAction[actionType].description}</span>
        <div className={styles.buttonsContainer}>
          <button onClick={closeAllModal} className={styles.btnYes}>Да</button>
          <button onClick={closeExitConfirmation} className={styles.btnNo}>Нет</button>
        </div>
      </div>
    </div>
  )
}

export default ExitConfirmation
