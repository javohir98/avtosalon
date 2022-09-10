import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 96px;
    padding: 24px 40px;
    background-color: #FCFCFC;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BackToSite = styled.button`
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

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
`;

export const UserInfoNft = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    svg {
        font-size: 20px;
    }
`;

export const UserInfoImgBox = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ffbc99;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
        object-fit: cover;
    }
`;
