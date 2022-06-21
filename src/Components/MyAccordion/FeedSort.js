import React from 'react'

export default function FeedSort() {
    const names = ['Default', 'Feature', 'Latest', 'Following', 'Bookmarks'];
    const [checkedState, setCheckedState] = React.useState(
        new Array(names.length).fill(false).map( (ele,index) => {
            if( index === 1){
                ele = true
            }
            return ele
        })
    );

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
             index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }

    const lis = names.map((name, index) => {
        return <li className='feed--item' key={index}>
            <input
                className="feed--item_input"
                type="checkbox"
                id={`feed-checkbox-${index}`}
                name={name}
                value={name}
                checked={checkedState[index]}
                onChange={() => handleChange(index)}
            />
            <label htmlFor={`feed-checkbox-${index}`} className='feed--item_label'>{name}</label>
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
