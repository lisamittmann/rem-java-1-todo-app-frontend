import styled from 'styled-components';

const StyledHeader = styled.header`
    font-family: monospace; 
    text-align: left; 
    font-size: 2em;
    margin-left: 0.5em
`;

function WelcomeHeadline(){
    return <StyledHeader>
        <p>Awesome KanBan Board 3000</p>
    </StyledHeader>

}
export default WelcomeHeadline