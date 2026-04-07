export default function TodoList({ todos, onToggle }) {
    return (
        <div className="card">
            <h2>Danh sách công việc</h2>

            {todos.length === 0 ? (
                <p>Chưa có công việc</p>
            ) : (
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todo-item">
                            <div>
                                <strong className={todo.completed ? "completed" : ""}>
                                    {todo.title}
                                </strong>
                                <p>
                                    Priority: {todo.priority} |{" "}
                                    {todo.completed ? "Completed" : "Pending"}
                                </p>
                            </div>

                            <button onClick={() => onToggle(todo.id)}>
                                {todo.completed ? "Bỏ" : "Xong"}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}