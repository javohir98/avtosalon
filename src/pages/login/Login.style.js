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
    border-radius: 12px;
    box-shadow: 2px 4px 18px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
    text-align: center;
    margin-top: 12px;
`;

export const Form = styled.form`
    min-width: 360px;
    padding: 12px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    input {
        border: none;
        background-color: #f4f4f4;
        border-radius: 12px;
        margin: 8px 0;
        width: 100%;
        padding: 12px 20px;

        &:focus {
            outline: none;
        }
    }

    input[type=submit] {
        cursor: pointer;
        background-color: #2A85FF;
        color: #fff;
        font-size: 15px;
        letter-spacing: 1;
        font-weight: 600;
        transition: all 0.3s ease-in-out;

        &:disabled {
            cursor: no-drop;
            background-color: rgb(42 133 255 / 60%);
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;