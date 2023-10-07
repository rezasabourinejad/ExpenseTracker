import Card from "../UI/Card";
import ExpensDate from "./ExpensDate";
import "./ExpensItem.css";

function ExpensItem(props) {
  return (
    <Card className="expense-item">
      <ExpensDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensItem;
