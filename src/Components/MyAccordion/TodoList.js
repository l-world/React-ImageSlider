import React from 'react'
import write from './Icon/write.svg'
import build from './Icon/dollar.svg'
import design from './Icon/palette.svg'
import ask from './Icon/rasiehand.svg'
import ninja from './Icon/rocket.svg'
import watch from './Icon/popcorn.svg'
import read from './Icon/glasses.svg'
import start from './Icon/star.svg'

export default function TodoList() {

    const list = [
        {
            name:"Write a Post",
            icon:write,
        },
        {
            name:"Build a SAAS",
            icon:build
        },
        {
            name:"Design a Site",
            icon:design
        },
        {
            name:"Ask a Question",
            icon:ask
        },
        {
            name:"Ninja Training",
            icon:ninja
        },
        {
            name:"Watch a Videos",
            icon:watch
        },
        {
            name:"Read Tutorials",
            icon:read
        },
        {
            name:"Upgrade to Pro",
            icon:start
        }
    ]

    const lis = list.map( item => {
        return <li className='todo--item' key={item.name}>
            <img className='todo--item_icon' src={item.icon} alt="" />
            <span className='todo--item_text'>{item.name}</span>
        </li>
    })

    return (
        <div className='wrap--todo'>
            <ul className='wrap--todo_ul'>
                {lis}
            </ul>
        </div>
    )
}
