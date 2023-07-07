import React, { useEffect, useState } from 'react';
import DropDown, { IOption } from '../DropDown';
import './index.less';

interface ISelect {
  value?: string | number;
  placeholder: string;
  onChange?: (val: string | number, option: IOption) => void;
  options: IOption[];
}

const Select = (props: ISelect) => {
  const { placeholder = '请选择' } = props;
  const [value, setValue] = useState<string | number | undefined>(props?.value);
  const handleChange = (val: string | number, option: IOption) => {
    setValue(val);
    props.onChange?.(val, option);
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <DropDown
      menus={props.options || []}
      trigger="click"
      value={value}
      onChange={handleChange}
    >
      <div className="yui-rc-select">
        {value ? (
          <div className="yui-rc-select-value">{value}</div>
        ) : (
          <div
            className="yui-rc-select-placeholder"
            style={{ color: '#d9d9d9' }}
          >
            {placeholder}
          </div>
        )}
      </div>
    </DropDown>
  );
};

export default Select;
