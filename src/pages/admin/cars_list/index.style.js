import styled from "styled-components";

export const Container = styled.div`
    padding: 12px;
    border-radius: 8px;
    background-color: #FCFCFC;
`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    .title {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 16px;
        }
    }

    .btn-container {
        display: flex;
        align-items: center;
        column-gap: 32px;
    }
`;

export const ActionsBtn = styled.button`
    padding: 12px 20px;
    height: 48px;
    background-color: #2A85FF;
    border-radius: 12px;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 10px;
        font-size: 20px;
    }
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

export const PContainer = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
`;