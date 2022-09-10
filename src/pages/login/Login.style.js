import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginContainer = styled.div`
    padding: 12px;
    background-color: #fff;
    border-radius: 5px;
`;

export const Title = styled.h3`
    text-align: center;
`;

export const Form = styled.form`
    min-width: 360px;
    padding: 12px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;


    input[type=number] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }

    input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;