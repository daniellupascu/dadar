import React, { useState, FC } from 'react';
import classnames from 'classnames';
import DropdownOption from '../dropdownPersonOptionWIthAcronym';
import Input from '../input';
// looks like a false positive
// eslint-disable-next-line import/no-unresolved
import styles from './personDropdownWithSearch.module.scss';

interface Props {
  options: Array<User>;
  className?: Optional<string>;
  withAcronyms?: boolean;
}

const DropdownWithSearch: FC<Props> = ({
  options: initialOptions,
  withAcronyms,
  className,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<User | null>(null);
  const [options, setOptions] = useState(initialOptions);

  function onInputFocus(): void {
    setSelectedPerson(null);
    setIsDropdownExpanded(true);
  }

  function onOptionClicked(option: User): void {
    setInputValue('');
    setIsDropdownExpanded(false);
    setSelectedPerson(option);
  }

  function filterOptionsByTitle(
    optionsToFilter: Array<User>,
    filterCriteria: string,
  ): Array<User> {
    return optionsToFilter.filter((user: User) => {
      const { name, email } = user;
      const stringToBeFiltered = name || email || '';
      return stringToBeFiltered
        .toLowerCase()
        .replace(/\s/g, '')
        .includes(filterCriteria.toLowerCase());
    });
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
        value={
          selectedPerson
            ? selectedPerson.name || selectedPerson.email || ''
            : inputValue
        }
        onChange={onInputChange}
        onInputFocus={onInputFocus}
      />
      {isDropdownExpanded && (
        <div className={styles.optionslist}>
          {options.map((user: User) => (
            <DropdownOption
              key={user.id}
              user={user}
              onOptionClick={onOptionClicked}
              withAcronym={withAcronyms}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;
