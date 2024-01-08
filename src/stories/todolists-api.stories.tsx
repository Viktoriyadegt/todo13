import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '26a633dd-4006-4ff0-9074-a17cafb60e67'
    }
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists`, settings)
            .then((then) => {
                setState(then.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {title: 'naruto_sun'}, settings)
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
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
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
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'NARUTO'}, settings)
            .then((then) => {
                setState(then.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

