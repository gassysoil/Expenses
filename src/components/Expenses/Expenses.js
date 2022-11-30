import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {/* transform expenses array into JSX array of ExpenseItem */}
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // unique id helps react render in a more efficient way
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}
