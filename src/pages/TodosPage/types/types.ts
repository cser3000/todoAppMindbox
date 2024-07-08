export enum TodoStatus {
    CREATE = 'создано',
    IN_PROGRESS = 'в работе',
    FAVORITES = 'изборанное',
    IN_DONE = 'выполнено',
}

export type Todo = {
    id: number
    title: string
    description: string
    status: TodoStatus
}

export type Todos = Array<Todo>