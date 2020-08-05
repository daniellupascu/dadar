import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DropdownWithSearch from '../components/dropdownWithSearch';

const options = [
  {
    title: 'Daniel Lupascu',
    subtitle: 'daniel@dixa.com',
    acronym: 'DL',
  },
  {
    title: 'Michael Morris',
    subtitle: 'mike@dixa.com',
    acronym: 'MM',
  },
  {
    title: 'Frank Johnson',
    subtitle: 'frank@dixa.com',
    acronym: 'FJ',
  },
  {
    title: 'Richard Dixon',
    subtitle: 'rich@dixa.com',
    acronym: 'RD',
  },
];

export const regular: React.FC = () => (
  <div>
    <div>
      <DropdownWithSearch options={options} />
    </div>
  </div>
);

export default {
  title: 'DropdownWithSearch',
  decorators: [withKnobs],
};
