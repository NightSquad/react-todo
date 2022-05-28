import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CreateNewItem.module.css'

function CreateNewItem() {
    const items = useSelector(state => state.items)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handlePress = (e) => {
        if (e.target.value.length === 0) return 
        const data = {id: items.length > 0 ? items[items.length-1].id + 1 : 0, title: e.target.value, checked: false}
        dispatch({type: "ADD_ITEM", data})
        setTitle('')
    }

    return ( 
        <div className={styles.CreateNewItem}>
            <div className={styles.icon} style={{opacity: items.length > 0 ? 1 : 0}}>
                <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.76 0.906738L16 13.1201L28.24 0.906738L32 4.66674L16 20.6667L0 4.66674L3.76 0.906738Z" fill="#D0D0D0"/>
                </svg>
            </div>
            <input onKeyDown={e => e.key === 'Enter' && handlePress(e)} value={title} onChange={(e) => setTitle(e.target.value)} className={styles.createItemInput} placeholder='What need to be done?'></input>
        </div>
     );
}

export default CreateNewItem;