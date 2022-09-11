import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 32px;
    margin-top: 48px;
`;

export const Card = styled(Link)`
    height: 50px;
    text-decoration: none;
    
    
    img {
        width: 100%;
    }

    h3 {
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        color: #000!important;
        text-transform: uppercase;
    }
`;

export const Title = styled.h3`
    margin-top: 24px;
    font-weight: 600;
    font-size: 46px;
`;