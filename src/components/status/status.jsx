import { useDispatch, useSelector } from 'react-redux';
import styles from './status.module.css'

function Status() {
    const [category, items] = useSelector(state => [state.category, state.items])
    const dispatch = useDispatch();

    let countActive = items.length;
    items.forEach(el => {
      if (el.checked) countActive--
    })

    const handleClick = (e) => {
        dispatch({type: "SET_CATEGORY", data: e.currentTarget.value})
    }

    const clearCompleted = () => {
        items.forEach(item => {
            if (item.checked) dispatch({type: "DELETE_ITEM", data: item})
        })
    }

    return ( 
        <div className={styles.status}>
            <p className={styles.itemsLeft}>{countActive} items left</p>
            <div className={styles.categories}>
                <button className={[styles.categoryButton, category === 'All' ? styles.active : ''].join(" ")} value='All' onClick={e => handleClick(e)}>All</button>
                <button className={[styles.categoryButton, category === 'Active' ? styles.active : ''].join(" ")} onClick={e => handleClick(e)} value='Active'>Active</button>
                <button className={[styles.categoryButton, category === 'Completed' ? styles.active : ''].join(" ")} onClick={e => handleClick(e)} value="Completed">Completed</button>
            </div>
            <button onClick={clearCompleted} className={styles.clearButton}>Clear Completed</button>
        </div>
    );
}

export default Status;