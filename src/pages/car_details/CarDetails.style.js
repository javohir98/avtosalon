import styled from "styled-components";

export const Title = styled.h1`
    font-weight: 600;
    font-size: 46px;
    margin-top: 24px;
`;

export const Container = styled.div`
    display: flex;
    margin-top: 64px;
    gap: 32px;

    @media screen and (max-width: 768px) {
        & {
            flex-direction: column;
        }
    }
`;

export const Col = styled.div`
    width: ${props => props.size};

    @media screen and (max-width: 768px) {
        & {
            width: 100%;
        }
    }
`;

export const DetailsBox = styled.div`
    background-color: #F6F6F6;
    padding: 16px 24px;
    border-radius: 8px;
`;

export const DTitle = styled.h3`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
`;

export const TopPrice = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    margin-top: 8px;
`;

export const D_ImgBox = styled.div`
    margin: 16px 0;

    img {
        width: 100%;
    }
`;

export const MarkBox = styled.div`
    margin-top: 4px;
    font-size: 16px;
    line-height: 32px;

    span {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);

        &.des {
            color: #000;
        }
    }
`;

export const Hr = styled.hr`
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 4px;
`;

export const FooterInfo = styled.div`
    font-size: 16px;
    text-align: center;
    line-height: 32px;
    margin-top: 4px;

    span {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const ImageBox = styled.div`

`;

export const Type = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;

    label {
        width: 100px;
        margin-left: 8px;
    }
`;