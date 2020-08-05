import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './input.module.scss';

interface Props {
  value: string;
  onChange: (e: string) => void;
  onInputFocus?: () => void;
  label?: string;
  placeholder?: string;
  className?: Optional<string>;
}

const Input: FC<Props> = ({
  value,
  label,
  placeholder,
  onChange,
  onInputFocus,
  className,
  ...otherProps
}) => {
  const rootClass = classnames(
    {
      [styles.root]: true,
    },
    className,
  );

  function onInputChange(e: any): void {
    const { value: inputValue } = e.target;
    onChange(inputValue);
  }

  return (
    <div {...otherProps} className={rootClass}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.inputContainer}>
        <input
          value={value}
          onChange={onInputChange}
          onFocus={onInputFocus}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default Input;
