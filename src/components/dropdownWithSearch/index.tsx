import React, { useState, FC } from 'react';
import classnames from 'classnames';
import DropdownOption from '../dropdownOptionWIthAcronym';
import Input from '../input';
import styles from './dropdownWithSearch.module.scss';

interface Props {
  options: Array<DropdownOption>;
  className?: Optional<string>;
}

const DropdownWithSearch: FC<Props> = ({
  options: initialOptions,
  className,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null,
  );
  const [options, setOptions] = useState(initialOptions);

  function onInputFocus(): void {
    setSelectedOption(null);
    setIsDropdownExpanded(true);
  }

  function onOptionClicked(option: DropdownOption): void {
    setInputValue('');
    setIsDropdownExpanded(false);
    setSelectedOption(option);
  }

  function filterOptionsByTitle(
    optionsToFilter: Array<DropdownOption>,
    filterCriteria: string,
  ): Array<DropdownOption> {
    return optionsToFilter.filter((option: DropdownOption) =>
      option.title
        .toLowerCase()
        .replace(/\s/g, '')
        .includes(filterCriteria.toLowerCase()),
    );
  }

  function onInputChange(inputText: string): void {
    setOptions(filterOptionsByTitle(initialOptions, inputText));
    setInputValue(inputText);
  }

  const rootClass = classnames(
    {
      [styles.root]: true,
    },
    className,
  );

  return (
    <div className={rootClass} {...otherProps}>
      <Input
        value={selectedOption ? selectedOption.title : inputValue}
        onChange={onInputChange}
        onInputFocus={onInputFocus}
      />
      {isDropdownExpanded && (
        <div className={styles.optionslist}>
          {options.map((option: DropdownOption) => (
            <DropdownOption
              key={option.title}
              option={option}
              onOptionClick={onOptionClicked}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;
