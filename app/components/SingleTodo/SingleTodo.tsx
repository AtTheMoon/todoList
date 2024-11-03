import React, {FC} from 'react'
import style from './Singletodo.module.scss'
import Link from 'next/link'

interface ISingleTodoProps{
    id: number,
    text: string
}

export const SingleTodo: FC<ISingleTodoProps> = ({id, text}) => {
  return (
    <div className={style.todo}>
        <div className={style.todo__container}>
            <div className={style.todo__text}>{text}</div>
            <Link href={'/todo'}>Назад</Link>
        </div>
    </div>
  )
}