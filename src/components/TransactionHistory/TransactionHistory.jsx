import clsx from "clsx";
import css from "./TransactionHistory.module.css";

import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory({ items }) {
	return (
		<table className={css.transactions} cellPadding={0} cellSpacing={0}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
					
				{items.map((item) => (
					<tr key={item.id}>
						<TransactionHistoryItem item={item} />
					</tr>
				))}

			</tbody>
		</table>
	);
}