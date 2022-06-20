import React from 'react'

export default function FeedSort() {
    const names = ['Default','Feature','Latest','Following','Bookmarks'];
    const [checked,setChecked] = React.useState('Feature');

    const handleChange = (e) => {      
        setChecked(e.target.name)
    }

    const lis = names.map( name => {
        return <li className='feed--item'  key={name}>
            <input
                className="feed--item_input"
                type="checkbox" 
                id={name}
                name={name}
                checked={ name === checked}
                onChange={ (e) => handleChange(e) }
            />
            <label htmlFor={name} className='feed--item_label'>{name}</label>
        </li>
    })
    return (
        <div className='wrap--feed'>
            <ul className='wrap--feed_ul'>
                {lis}
            </ul>
        </div>
        
    )
}
