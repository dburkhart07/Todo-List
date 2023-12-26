export function TodoItem( { completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
          <label>
            <input 
                type="checkbox" 
                checked = {completed}
                onChange={e => toggleTodo(id, e.target.checked)} 
            />
            {title}
          </label>
          <button 
            //() => calls a function that deletes todo, rather than just passing in the result (deletes it instantly)
            onClick={() => deleteTodo(id)}
            className="btn btn-danger"
          >
            Delete
            </button>
        </li>
    )
}