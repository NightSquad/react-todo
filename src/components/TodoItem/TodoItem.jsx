import { useDispatch } from 'react-redux';
import styles from './TodoItem.module.css'

function TodoItem({item}) {
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch({type: "SET_ITEM", data: {...item, checked: !item.checked}})
    }

    const handleClick = () => {
        dispatch({type: "DELETE_ITEM", data: item})
    }

    return ( 
        <div className={styles.TodoItem}>
            <div>
                <input type="checkbox" name="" checked={item.checked} onChange={handleChange} id={item.id} />
                <label htmlFor={item.id}>{item.title}</label>
            </div>
            <button onClick={handleClick} className={styles.deleteItem}></button>
        </div>
    );
}

export default TodoItem;