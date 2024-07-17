import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friend: { avatar, name, isOnline },
}) {

    const statusClass = clsx(css.friendStatus, isOnline ? css.friendStatusOnline : css.friendStatusOffline);

	return (
		<div className={css.friendItem}>
			<img className={css.friendAvatar} src={avatar} alt="Avatar" width="60" />
			<p className={css.friendName}>{name}</p>
            <p className={statusClass}>
                {isOnline === true ? "Online" : "Offline"}
            </p>
		</div>
    );
}