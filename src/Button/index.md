# Button

```jsx
import { Button } from 'yui';

export default () => (
  <div style={{ flexWrap: 'wrap', gap: 8, display: 'inline-flex' }}>
    <Button
      title="Hello yui!"
      onClick={() => {
        console.log('Hello yui!');
      }}
    />
    <Button
      type="primary"
      title="Hello yui!"
      enableRipple
      onClick={() => {
        console.log('Hello yui!');
      }}
    />
  </div>
);
```
