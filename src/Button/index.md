# Button

```jsx
import { Button } from 'yui-rc';

export default () => (
  <div style={{ flexWrap: 'wrap', gap: 8, display: 'inline-flex' }}>
    <Button
      onClick={() => {
        console.log('Hello yui-rc!');
      }}
    >
      Hello yui-rc!
    </Button>
    <Button
      type="primary"
      enableRipple
      onClick={() => {
        console.log('Hello yui-rc!');
      }}
    >
      Hello yui-rc!
    </Button>
  </div>
);
```
