import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background: white;
  font-size: 12px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

function Button({text, onClick}) {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}

export default Button