import styles from '../../styles/Home.module.css';

export default function Todo({todoItem, toggleComplete}){
    return(
        <div className={styles.item}>
            <input type="checkbox" checked={todoItem.complete} onChange={toggleComplete}/>{todoItem.item}
        </div>        
    )
}