# DropDown

````jsx
import { DropDown, Button } from 'yui-rc';
import { useState } from 'react';

export default () => {
  return (
    <DropDown
      onClick={(e, item) => {
        console.log(e, item);
      }}
      menus={[
        { label: 'js', key: 'js' },
        { label: 'java', key: 'java' },
      ]}
    >
      <a>点我</a>
    </DropDown>
  );
};

```

```;
````
