import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  height: 48px;
  background-color: #2A85FF;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
      margin-right: 10px;
      font-size: 20px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-right: 6px;
  color: #000;

  svg {
    margin-left: 6px;
  }
`;