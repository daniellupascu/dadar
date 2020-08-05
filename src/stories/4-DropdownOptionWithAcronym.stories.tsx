import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DropdownOptionWithAcronym from '../components/dropdownOptionWIthAcronym';

const option = {
  title: 'Daniel Lupascu',
  subtitle: 'daniel@dixa.com',
};

const optionWithAcronym = {
  title: 'Daniel Lupascu',
  acronym: 'DL',
  subtitle: 'daniel@dixa.com',
};

export const regular: React.FC = () => (
  <div>
    <div>
      <DropdownOptionWithAcronym
        option={option}
        onOptionClick={(): void => {}}
      />
    </div>
    <br />
    <div>
      <DropdownOptionWithAcronym
        option={optionWithAcronym}
        onOptionClick={(): void => {}}
      />
    </div>
    <br />
    <div />
  </div>
);

export default {
  title: 'DropdownOptionWithAcronym',
  decorators: [withKnobs],
};
