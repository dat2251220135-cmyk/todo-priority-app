export default function TodoStats({ stats }) {
    return (
        <div className="stats-grid">
            <div className="card">
                <h3>Tổng</h3>
                <p>{stats.total}</p>
            </div>

            <div className="card">
                <h3>Hoàn thành</h3>
                <p>{stats.completed}</p>
            </div>

            <div className="card">
                <h3>Chưa xong</h3>
                <p>{stats.pending}</p>
            </div>
        </div>
    );
}