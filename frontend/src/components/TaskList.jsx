//import Expense from '../../../backend/models/Expense';
import TaskItem from './TaskItem';

function TaskList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p>No expenses yet. Add one above to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {expenses.map((expense) => (
        <TaskItem
          key={expense._id}
          expense={expense}
          onDelete={() => onDeleteExpense(expense._id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
