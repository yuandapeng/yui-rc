import type * as React from 'react';
import { type FC } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children?: React.ReactNode;
}

const Portal: FC<PortalProps> = (props) => {
  const { children } = props;

  return ReactDOM.createPortal(children, document.body);
};

export default Portal;
