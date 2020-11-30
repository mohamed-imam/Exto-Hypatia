import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: rgba(255,255,255, 1) 100%;
    `;

    export const FormWrap = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 50%;
        @media screen and(max-width: 400px){
            height: 80%;
        }
        @media screen and(max-height: 600px){
            margin-top: 100px;
            margin-bottom: 100px;
        }
    `;

            //Title
export const Icon = styled.div`
        text-align: center;
        text-decoration: none;
        color: #183257;
        font-weight: 700;
        font-size: 70px;
        margin-bottom: 80px;
        margin-top: 80px;
        height: auto%;


        @media screen and(max-width: 480px) , screen and (max-height: 866px){
            margin-left: 16px;
            margin-right: 8px;
            margin-top: 50px;
        }

        @media screen and (max-height: 692px){
            
            margin-top: 20px;
            font-size: 70px;
            margin-bottom: 50px;
        }

    `;

    export const FormContent = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    @media screen and(max-width: 480px)
    {
        padding: 10px;
    }
`;
        //signin container
export const Form = styled.form`
        background: rgb(24, 50, 87);
        max-width: 500px;
        height: auto%;
        width: 100%;
        z-index:1;
        display: grid;
        margin: 0 auto;
        padding: 80px 32px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

        @media screen and(max-width: 400px) , screen and (max-height: 866px){
            padding: 32px 32px;
            height: auto%;
            width: 80%;
            margin-bottom: 120px;
            margin-top: 50px;
        }

        @media screen and (max-height: 692px){
            padding: 16px 32px;
            margin-top: 10px;
            height: auto%;
            width: 75%;
            margin-bottom: 10px;
        }

    `;

    export const FormH1 = styled.h1`
        margin-bottom: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    `;

    export const FormLabel = styled.label`
    margin-bottom: 8px;
    color: #fff;
    font-size: 14px;
`;

    export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

    export const FormButton = styled.button`
    background: #3498db;
    padding: 16px 0px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
`;

    export const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 20;
`;