const { Link } = require('react-router-dom');
const { default: styled } = require('styled-components');

export const StyledLink = styled(Link)`
  font-size: 40px;
  text-decoration: none;
  color: black;
  padding: 20px 100px;
  border: 2px solid black;
  border-radius: 15px;
  text-align: center;
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 300ms;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 100px;
  margin-bottom: 180px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin-bottom: 150px;
`;

export const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 971px;
`;
