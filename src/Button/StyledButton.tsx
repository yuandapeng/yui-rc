import styled, { css } from 'styled-components';

const BaseButton = styled.button`
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

interface IStyledButtonProps {
  $type?: 'primary' | 'default';
}

const StyledButton = styled(BaseButton)<IStyledButtonProps>`
  ${(props) => {
    switch (props.$type) {
      case 'primary':
        return css`
          border: 1px solid transparent;
          background-color: #1677ff;
          color: #fff;
        `;
      default:
        return css`
          border: 1px solid #d9d9d9;
          background-color: #fff;
        `;
    }
  }}
`;

export default StyledButton;
