import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background: white;
  font-size: 12px;
  border-radius: 3px;
  color: teal;
  border: 2px solid teal;
  margin: 0 0.5em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: teal;
    color: white;
  }
`;

function Button({text, onClick}) {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}

export default Button