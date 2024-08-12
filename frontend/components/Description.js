import React from 'react';
import styled from 'styled-components';

// Styled Components
const DescriptionContainer = styled.div`
   margin: 20px;
`;

const Title = styled.h2`
   font-size: 2rem;
   color: #333;
`;

const Explanation = styled.p`
   font-size: 1.2rem;
   line-height: 1.6;
   color: #555;
`;

function Description({ title, explanation }) {
    return (
        <DescriptionContainer>
            <Title>{title}</Title>
            <Explanation>{explanation}</Explanation>
        </DescriptionContainer>
    );
}

export default Description;