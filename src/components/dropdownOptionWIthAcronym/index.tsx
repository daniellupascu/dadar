import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './dropdownOptionWithAcronym.module.scss';

interface Props {
  option: DropdownOption;
  onOptionClick: (option: DropdownOption) => void;
  acronym?: string;
  className?: Optional<string>;
}

const DropdownOptionWithAcronym: FC<Props> = ({
  option,
  option: { title, subtitle, acronym },
  onOptionClick,
  className,
  ...otherProps
}) => {
  function handleKeyPress(event: React.KeyboardEvent): void {
    if (event.key === 'Enter') {
      onOptionClick(option);
    }
  }

  function onOptionClickHandler(): void {
    onOptionClick(option);
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
      {acronym && <div className={styles.optionIcon}>{acronym}</div>}
      <div className={styles.optionTitleSubtitle}>
        <div>{title}</div>
        {subtitle && <div className={styles.optionSubtitle}>{subtitle}</div>}
      </div>
    </div>
  );
};

export default DropdownOptionWithAcronym;
