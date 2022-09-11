import styled from "styled-components";

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 32px;

`;

export const Card = styled.div`
    height: 50px;
    
    img {
        width: 100%;
    }

    h3 {
        font-weight: 500;
        font-size: 24px;
        text-align: center;
    }
`;