import classNames from 'classnames';
import React, { useEffect, useRef, useState, type FC } from 'react';
import * as ReactIs from 'react-is';
import prefix from '../const/prefix';
import Portal from './Portal';

import Align from 'rc-align';
import './index.less';
interface IOption {
  label: React.ReactNode;
  key: string;
}

const delay = 0.1;

const DropDown: FC<{
  onClick?: (e: React.MouseEvent, item: IOption) => void;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click';
  children: React.ReactNode;
  className?: string;
  menus: Array<{ label: React.ReactNode; key: string }>;
}> = (props) => {
  const { trigger = 'hover', className, menus = [] } = props;
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const timer = useRef<NodeJS.Timeout>();
  const handleMenuItemClick = (e: React.MouseEvent, item: IOption) => {
    props.onClick?.(e, item);
  };
  useEffect(() => {
    const handleMenuClick = (e: MouseEvent) => {
      // menu 容器
      if (e.target !== menuRef.current && e.target !== triggerRef.current) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleMenuClick);
    return () => {
      window.removeEventListener('click', handleMenuClick);
    };
  }, []);

  const clearTimer = () => {
    clearTimeout(timer.current);
  };

  /** hover 延时执行更新打开状态 */
  const delaySetOpen = (visible: boolean, timeout = 0) => {
    timer.current = setTimeout(() => {
      clearTimer();
      setOpen(visible);
    }, timeout * 1000);
  };

  if (React.Children.only(props.children)) {
    if (React.isValidElement(props.children)) {
      if (ReactIs.isFragment(props.children)) {
        throw new Error(
          'React.Children.only expected to receive a single React element child, but got a fragment element',
        );
      } else {
        const proxyProps: {
          onMouseEnter?: React.MouseEventHandler;
          onClick?: React.MouseEventHandler;
          onMouseLeave?: React.MouseEventHandler;
          onBlur?: React.MouseEventHandler;
          className?: string;
          ref: React.RefObject<HTMLDivElement>;
        } = {
          ref: triggerRef,
        };

        if (trigger === 'click') {
          proxyProps.onClick = () => {
            setOpen(true);
          };
        } else {
          proxyProps.onMouseEnter = () => {
            clearTimer();
            setOpen(true);
          };
          proxyProps.onMouseLeave = () => {
            delaySetOpen(false, delay);
          };
        }

        proxyProps.className = classNames(
          `${prefix}-dropdown`,
          {
            [`${prefix}-dropdown-open`]: open,
          },
          className,
        );

        const triggerNode = React.cloneElement(props.children, proxyProps);

        const popupEvent: {
          onMouseEnter?: React.MouseEventHandler;
          onMouseLeave?: React.MouseEventHandler;
        } = {};

        if (trigger === 'hover') {
          popupEvent.onMouseEnter = clearTimer;
          popupEvent.onMouseLeave = () => {
            delaySetOpen(false, delay);
          };
        }

        return (
          <>
            {triggerNode}
            {triggerRef.current && (
              <Portal>
                <Align
                  monitorWindowResize
                  target={() => {
                    return triggerRef.current!;
                  }}
                  align={{ points: ['tl', 'bl'] }}
                >
                  <ul
                    ref={menuRef}
                    style={{ position: 'absolute' }}
                    className={classNames(`${prefix}-dropdown-popup`, {
                      [`${prefix}-dropdown-popup-open`]: open,
                    })}
                    {...popupEvent}
                  >
                    {menus.map((item) => (
                      <li
                        key={item.key}
                        onClick={(e) => handleMenuItemClick(e, item)}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </Align>
              </Portal>
            )}
          </>
        );
      }
    } else {
      throw new Error('expected to receive a effective React element child');
    }
  } else {
    throw new Error(
      'React.Children.only expected to receive a single React element child',
    );
  }
};

export default DropDown;
