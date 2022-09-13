import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 340px;
    height: 100vh;
    padding: 24px;
    background-color: #FCFCFC;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.1);

    ul {
        margin-top: 96px;
        list-style: none;
    }

    li {
        margin-bottom: 24px;
    }
`;

export const SideLink = styled(NavLink)`
    font-weight: 600;
    font-size: 16px;
    color: #6F767E;
    text-decoration: none;

    &.active svg {
        color: #1A1D1F;
    }

    svg {
        margin-right: 12px;
    }
`;

export const DarkModeCont = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background-color: #F4F4F4;
    display: flex;
`;

export const ActiveMode = styled.div`
    position: absolute;
    width: 50%;
    height: 32px;
    border-radius: 32px;
    background-color: #fff;
    transform: ${props => props.mode === 'dark' ? 'translateX(calc(100% - 4px))' : props.mode === 'light' && 'translateX(4px)'};
    top: 4px;
    transition: all 0.3s ease-in-out;
    z-index: 0;
`;

export const IconBox = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 22222;
    cursor: pointer;
`;