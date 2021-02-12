import styled from 'styled-components';

const StyledHeader = styled.header`
    font-family: monospace; 
    text-align: left; 
    font-size: 2em;
`;

function WelcomeHeadline(){
    return <StyledHeader>
        <p>Awesome KanBan Board 3000</p>
    </StyledHeader>

}
export default WelcomeHeadline