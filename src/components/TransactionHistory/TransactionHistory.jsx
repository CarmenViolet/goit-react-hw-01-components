import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transaction_history}>
  <thead className={css.tablet}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
{items.map((item) => {return(
 <tbody key={item.id}>
 <tr>
   <td>{item.type}</td>
   <td>{item.amount}</td>
   <td>{item.currency}</td>
 </tr>
</tbody>
)})}
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}

