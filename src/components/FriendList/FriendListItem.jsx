import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({avatar, name, isOnline}) => {

return (<li className={css.item} >
  <span className={isOnline ? css.status : css.status_red}></span>
  <img className={css.avatar} src={avatar} alt={name} width={48} />
  <p className={css.name}>{name}</p>
</li>)
}

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}