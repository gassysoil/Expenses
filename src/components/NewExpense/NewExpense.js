import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const newExpenseFormSubmitHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onNewExpenseAdded(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm
        onNewExpenseFormSubmit={newExpenseFormSubmitHandler}
      ></NewExpenseForm>
    </div>
  );
}
