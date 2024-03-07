import React from 'react';
import ProgressDisplay from './ProgressDisplay';

import '../../foundation/globals.scss';

export default {
  title: 'ProgressDsiplay',
  args: {
    modifier: undefined,
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <ProgressDisplay {...args} />;

export const Normal = ModifierTemplate.bind({});

// it's possible to provide a `key` - this is a special property and helps
// react with rerendering. Remove it and see how react complains.
// This property is not in the type list on purpose!
// More: https://reactjs.org/docs/lists-and-keys.html#keys
export const KeyTest = () => (
  <div>
    {[1, 2, 3].map((id) => (
      <ProgressDisplay key={id} />
    ))}
  </div>
);
