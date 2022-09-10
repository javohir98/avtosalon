import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.mode === 'dark' ? null : null};
    display: flex;
`;