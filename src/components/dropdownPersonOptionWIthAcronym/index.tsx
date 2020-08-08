import React, { FC } from 'react';
import classnames from 'classnames';
import Avatar from '../avatar';
import styles from './dropdownPersonOptionWIthAcronym.module.scss';

interface Props {
  user: User;
  onOptionClick: (user: User) => void;
  withAcronym?: boolean;
  className?: Optional<string>;
}

const DropdownPersonOptionWIthAcronym: FC<Props> = ({
  user,
  user: { name, email },
  withAcronym,
  onOptionClick,
  className,
  ...otherProps
}) => {
  function handleKeyPress(event: React.KeyboardEvent): void {
    if (event.key === 'Enter') {
      onOptionClick(user);
    }
  }

  function onOptionClickHandler(): void {
    onOptionClick(user);
  }

  const rootClass = classnames(
    {
      [styles.root]: true,
    },
    className,
  );

  return (
    <div
      {...otherProps}
      onClick={onOptionClickHandler}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      className={rootClass}
    >
      {withAcronym && (
        <div style={{ width: '45px' }}>
          <Avatar user={user} />
        </div>
      )}
      <div className={styles.optionTitleSubtitle}>
        <div>{name}</div>
        {email && <div className={styles.optionSubtitle}>{email}</div>}
      </div>
    </div>
  );
};

export default DropdownPersonOptionWIthAcronym;
