import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgb(244, 244, 244, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 88888;
`;

export const Container = styled.div`
    width: calc(100% - 276px);
    border-radius: 16px;
    padding: 32px 24px 32px 24px;
    gap: 24px;
    box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05), 0px 32px 48px -8px rgba(0, 0, 0, 0.1);
    background: #fff;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    .title {
        display: flex;
        align-items: center;
        font-family: 'Inter', sans-serif;

        img {
            margin-right: 16px;
        }
    }
`;

export const Close = styled.button`
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    border-radius: 50%;
    cursor: pointer;
`;

export const Form = styled.form`
    margin-top: 24px;
`;

export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

`;

export const FormRowBox = styled.div`
    width: calc(50% - 12px);
`;

export const Label = styled.label`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Inter', sans-serif;
`;

export const Input = styled.input`
    width: 100%;
    border-radius: 12px;
    max-height: 48px;
    border: none;
    padding: 12px;
    background-color: #F4F4F4;
    font-family: 'Inter', sans-serif;

    &:focus {
        outline: none;
    }
`;  

export const TextArea = styled.textarea`
    width: 100%;
    border-radius: 12px;
    padding: 12px;
    border: none;
    background-color: #F4F4F4;
    font-family: 'Inter', sans-serif;

    &:focus {
        outline: none;
    }
`;

export const FormLine = styled.div`
    height: 1px;
    width: 100%;
    border-radius: 1px;
    background-color: #EFEFEF;
    margin-top: 16px;
    margin-bottom: 24px;
`;

export const Button = styled.button`
    width: 154px;
    height: 48px;
    border-radius: 12px;
    border: none;
    background-color: #2A85FF;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 15px;
    float: right;
`;
