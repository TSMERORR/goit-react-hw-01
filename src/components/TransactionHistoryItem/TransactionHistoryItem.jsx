import clsx from "clsx";
import css from "./TransactionHistoryItem.module.css";

export default function TransactionHistoryItem({ item: { type, amount, currency } }) {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
}