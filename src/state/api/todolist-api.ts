import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
       
    },
})


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType>(
            `todo-lists/${todolistId}`,
            {title: title},
        )
        return promise
    },
    removeTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(
            `todo-lists/${todolistId}`,
        )
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>(
            `todo-lists`,
            {title},
        )
        return promise
    },
    readeTodolist() {
        const promise = instance.get<Array<TodolistType>>(
            `todo-lists`,
        )
        return promise
    },

    createTask(todolistId:string, title:string){
        return instance.post<ResponseType<{item: ItemType}>>(`/todo-lists/${todolistId}/tasks`, {title})
    },
    readeTask(todolistId:string){
        return instance.get<ResponseTaskType>(`/todo-lists/${todolistId}/tasks`)
    },
    removeTask(todolistId:string, taskId:string){
        return instance.delete<ResponseTaskType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId:string, taskId:string, title:string){
        return instance.put<ResponseType<{item: ItemType}>>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}



export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseTaskType = {
    items: ItemType[],
    totalCount: number,
    error: number
}

type ItemType = {
    id: string,
    title: string,
    description: number,
    todoListId: string,
    order: number,
    status: number,
    priority: number,
    startDate: number,
    deadline: number,
    addedDate: string
}



