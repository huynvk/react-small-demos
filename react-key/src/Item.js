import styled from 'styled-components';

export const Item = styled.p`
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin-bottom: 10px;
  padding-left: 10px;
  border: 1px solid black;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    flex: 1;
  }
`;

export const getColor = (count) => {
  const colors = ['orange', 'green', 'yellow'];

  return colors[count % colors.length];
};
