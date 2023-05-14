import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.statusOn : css.statusOff}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
