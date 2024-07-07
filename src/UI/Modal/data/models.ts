export enum CURRENT_ACTION {
  DELETE = 'delete',
  EXIT = 'exit',
}

export const contentDependingOnAction = {
  [CURRENT_ACTION.DELETE]: {
    title: 'Удалить задачу?',
    description:
      'Вы уверены, что хотите удалить задачу? Все данные будут утеряны.',
  },
  [CURRENT_ACTION.EXIT]: {
    title: 'Выйти без сохранения?',
    description:
      'Вы уверены, что хотите выйти? Внесённые изменения не будут сохранены.',
  },
}
