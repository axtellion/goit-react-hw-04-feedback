import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  gap: 16px;

  margin-bottom: 20px;
`;

export const Item = styled.li`
  list-style-type: none;
`;

export const Btn = styled.button`
  width: 150px;
  padding: 5px;
  font-size: 16px;
  color: orange;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px #000000;
  text-transform: uppercase;
  cursor: pointer;
  :hover,
  :focus {
    color: red;
  }
`;
