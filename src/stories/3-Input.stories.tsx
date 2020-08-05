import React from 'react';
import Input from '../components/input';

export const regular: React.FC = () => (
  <div>
    <div>
      <Input
        value=""
        onChange={(): void => {}}
        placeholder="Name"
        label="Name"
      />
    </div>
    <br />
    <div>
      <Input value="Daniel" onChange={(): void => {}} label="Name" />
    </div>
    <br />
    <div>
      <Input value="Daniel" onChange={(): void => {}} />
    </div>
  </div>
);

export default {
  title: 'Input',
};
