// import Logo from "../Logo/Logo";
// import UserMenu from "../UserMenu/UserMenu";

import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({name, tag, location, image, stats: {followers, views, likes}}) {

  return (
    <div className={css.userWrapper}>
		  <div className={css.userData}>
        <img
          className={css.userAvatar}
		      src={image}
          alt={name}
		    />
		    <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
		  </div>

		  <ul className={css.userStats}>
		    <li className={css.userStatsItem}>
		      <span>Followers</span>
          <span className={css.userStatsItemCounter}>{followers}</span>
		    </li>
		    <li className={css.userStatsItem}>
		      <span>Views</span>
		      <span className={css.userStatsItemCounter}>{views}</span>
		    </li>
		    <li className={css.userStatsItem}>
		      <span>Likes</span>
		      <span className={css.userStatsItemCounter}>{likes}</span>
		    </li>
		  </ul>
		</div>
  );
}