import styled from "styled-components";

export const Container = styled.div`
    padding: 12px;
    border-radius: 8px;
    background-color: #FCFCFC;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const THead = styled.thead`
    
`;

export const TBody = styled.tbody`
    
`;

export const Tr = styled.tr`
    border-bottom: 1px solid #EFEFEF;
`;

export const Th = styled.th`
    text-align: left;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 600;
    font-size: 13px;
    color: #6F767E;

    &:first-child {
        padding-left: 12px;
    }

    &:last-child {
        padding-right: 12px;
    }
`;

export const Td = styled.td`
    text-align: left;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 600;
    font-size: 15px;
    color: #1A1D1F;

    &:first-child {
        padding-left: 12px;
    }

    &:last-child {
        padding-right: 12px;
    }
`;

export const Button  = styled.button`

    background: transparent;
    border: none;
    cursor: pointer;    

    svg {
        font-size: 20px;
        color: ${props => props.color}
    }
`;