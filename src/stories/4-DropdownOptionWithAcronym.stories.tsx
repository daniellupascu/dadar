import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DropdownPersonOptionWIthAcronym from '../components/dropdownPersonOptionWIthAcronym';

const option = {
  id: '1234-1234-1234-1234',
  name: 'Daniel Lupascu',
  email: 'daniel@dixa.com',

  phoneNumber: '+4560860931',
};

export const regular: React.FC = () => (
  <div>
    <div>
      <DropdownPersonOptionWIthAcronym
        user={option}
        onOptionClick={(): void => {}}
      />
    </div>
    <br />
    <div>
      <DropdownPersonOptionWIthAcronym
        user={option}
        withAcronym
        onOptionClick={(): void => {}}
      />
    </div>
    <br />
    <div />
  </div>
);

export default {
  title: 'DropdownPersonOptionWIthAcronym',
  decorators: [withKnobs],
};
