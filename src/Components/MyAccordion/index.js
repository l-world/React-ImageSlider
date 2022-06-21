import React from 'react'
import './myAccordion.css'

import Accordion from './MyAccordion'
import FeedSort from './FeedSort'
import sortIcon from './Icon/sort.svg'
import TodoList from './TodoList'
import listIcon from './Icon/table-list-solid.svg'
import Discord from './Discord'


export default function Index() {
    return (
        <div className='accordion-container'>
            <Accordion title="Sort Home Feed By Default" src={sortIcon}>
                <FeedSort />
            </Accordion>
            <Accordion title="More Things to do" src={listIcon}>
                <TodoList />
            </Accordion>
            
            <Discord />
        </div>
    )
}
