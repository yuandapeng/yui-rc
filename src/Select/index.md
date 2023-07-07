# Select

```jsx
import { Select, Button } from 'yui-rc';
import { useState } from 'react';

export default () => {
  return (
    <Select
      onChange={(e, item) => {
        console.log(e, item);
      }}
      options={[
        { label: 'js', key: 'js' },
        { label: 'java', key: 'java' },
      ]}
    />
  );
};
```
