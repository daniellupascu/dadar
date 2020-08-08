import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PersonsDropdownWithSearch from '../components/personsDropdownWithSearch';

const options = [
  {
    id: (Math.random() * 1.345).toString(),
    name: 'Daniel Lupascu',
    email: 'daniel@dixa.com',
  },
  {
    id: (Math.random() * 1.345).toString(),
    name: 'Michael Morris',
    email: 'mike@dixa.com',
  },
  {
    id: (Math.random() * 1.345).toString(),
    name: 'Frank Johnson',
    email: 'frank@dixa.com',
  },
  {
    id: (Math.random() * 1.345).toString(),
    name: 'Richard Dixon',
    email: 'rich@dixa.com',
  },
];

export const regular: React.FC = () => (
  <div>
    <div>
      <PersonsDropdownWithSearch options={options} withAcronyms />
    </div>
  </div>
);

export default {
  title: 'DropdownWithSearch',
  decorators: [withKnobs],
};
