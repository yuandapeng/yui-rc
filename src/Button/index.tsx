import classNames from 'classnames';
import React, { useEffect, type FC } from 'react';
import prefix from '../const/prefix';
import './index.less';

const Button: FC<{
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: 'primary' | 'default';
  /** 开启水波纹效果 */
  enableRipple: boolean;
}> = (props) => {
  const ButtonRef = React.useRef<HTMLButtonElement>(null);
  const { type = 'default', enableRipple } = props;

  useEffect(() => {
    if (!enableRipple) return;
    // 对要添加水波纹效果的元素添加ripple类
    const element = ButtonRef.current;
    const handleClick = (e: MouseEvent) => {
      let createDiv = document.createElement('div');
      createDiv.className = 'ripple-div rippling';
      let maxHW = Math.max(
        element?.offsetWidth || 0,
        element?.offsetHeight || 0,
      );
      createDiv.style.width = `${maxHW}px`;
      createDiv.style.height = `${maxHW}px`;
      // 动态设置动画时间，容器越大，动画时间越长
      createDiv.style.animation = `ripple-animation 0.6s linear`;
      // 重新计算水波纹的中心位置
      createDiv.style.top = `${e.offsetY - maxHW / 2}px`;
      createDiv.style.left = `${e.offsetX - maxHW / 2}px`;
      // 追加到元素中
      element?.appendChild(createDiv);
      setTimeout(() => {
        // 删除元素
        element?.removeChild(createDiv);
      }, 600);
    };
    // 添加点击事件
    element?.addEventListener('click', handleClick);
    return () => {
      element?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <button
      type="button"
      ref={ButtonRef}
      className={classNames(`${prefix}-btn`, `${prefix}-btn-${type}`)}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
