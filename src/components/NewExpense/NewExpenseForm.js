import "./NewExpenseForm.css";

export default function NewExpenseForm() {
  const titleChangeHandler = () => {
    console.log("Title changed!");
  };

  return (
    <form>
      <div className="new-expense__control">
        <p>You can add new expense here</p>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
