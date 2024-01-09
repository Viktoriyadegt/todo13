import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../state/api/todolist-api";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.readeTodolist()
            .then((then) => {
                setState(then.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'maruf'
       todolistAPI.createTodolist(title)
            .then((then) => {
                setState(then.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "fd0d256e-6290-4380-8ff0-d17c2f7f4dc0"
       todolistAPI.removeTodolist(todolistId)
            .then((then) => {
                setState(then.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "20f677d2-398a-4c9f-ba1b-e4d61198e625"
        const title = 'learn English'
        todolistAPI.updateTodolist(todolistId, title)
            .then((then) => {
                setState(then.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "20f677d2-398a-4c9f-ba1b-e4d61198e625"
        const taskId = "a22321af-3222-45ed-8b77-80cd988eadd5"
        const title = 'MORSALKA'
        todolistAPI.updateTask(todolistId, taskId, title)
            .then((then) => {
                setState(then.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "20f677d2-398a-4c9f-ba1b-e4d61198e625"
        const taskId = "1bf347ca-c81d-4b07-af38-2b3802fdf531"
        todolistAPI.removeTask(todolistId, taskId)
            .then((then) => {
                setState(then.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "20f677d2-398a-4c9f-ba1b-e4d61198e625"
        const title = 'learn English'
        todolistAPI.createTask(todolistId, title)
            .then((then) => {
                setState(then.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "20f677d2-398a-4c9f-ba1b-e4d61198e625"
        todolistAPI.readeTask(todolistId)
            .then((then) => {
                setState(then.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

