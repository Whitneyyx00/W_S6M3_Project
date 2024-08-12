import React from 'react';
import styled from 'styled-components';

// Styled Components
const HeaderContainer = styled.header`
   background-color: #282c34;
   padding: 20px;
   color: white;
`;

const HeaderTitle = styled.h1`
   font-size: 2.5rem;
`;

function Header() {
    return (
        <HeaderContainer>
            <HeaderTitle>NASA Astronomy Picture of the Day</HeaderTitle>
        </HeaderContainer>
    );
}

export default Header;