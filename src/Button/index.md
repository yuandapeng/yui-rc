# Button

```jsx
import { Button } from 'yui-rc';

export default () => (
  <div style={{ flexWrap: 'wrap', gap: 8, display: 'inline-flex' }}>
    <Button
      title="Hello yui-rc!"
      onClick={() => {
        console.log('Hello yui-rc!');
      }}
    />
    <Button
      type="primary"
      title="Hello yui-rc!"
      enableRipple
      onClick={() => {
        console.log('Hello yui-rc!');
      }}
    />
  </div>
);
```
