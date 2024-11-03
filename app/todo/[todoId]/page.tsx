'use client'
import React, { FC } from 'react'
import { SingleTodo } from '../../components/SingleTodo/SingleTodo'
import { useTodoStore } from '@/app/store/store'
import { useParams } from 'next/navigation'


const TodoId: FC = () => {
    const arr = useTodoStore((state:any) => state.todos)
    const params = useParams()
    const newArr = arr.filter((todo:any)=>todo.id == params.todoId)
    

        return (
            <SingleTodo id={12} text={newArr[0].text}></SingleTodo>
        )        
}

export default TodoId