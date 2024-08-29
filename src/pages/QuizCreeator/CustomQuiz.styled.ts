import styled from "styled-components";
import { flexCenter, flexColumnCenter } from "../../styles/Mixin";
import { Colors } from "../../styles/Colors";

interface CurrentParsentType{
    currentParsent:number;
}
interface IsActiveType {
    isActive: boolean;
}

export const CustomQuizWrapper = styled.div`
    width: 60%;
    height: 100%;
`;

export const ProgressBarWrapper = styled.div`
    width: 80%;
    height: 5%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 1%;
`;

export const ProgressBar = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'currentParsent',
})<CurrentParsentType>`
    width: 50%;
    height: 30px;
    background: linear-gradient(90deg, rgba(186,237,158,1) 0%, rgba(149,229,184,1) 34%, rgba(149,211,229,1) 65%, rgba(141,168,224,1) 100%);
    border-radius: 10px;
    ${flexCenter};
    width: ${(prop) => prop.currentParsent}%;
    transition: ease-in-out 200ms;
`;

export const CustomQuizAreaWrapper = styled.div`
    width: 100%;
    height: 60%;
`;

export const CustomQuizArea = styled.div`
    width: 80%;
    height: 84%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const QuizTypeBtnBundle = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2%;
`;

export const QuizTypeBtn = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isActive",
})<IsActiveType>`
    width: 8vw;
    height: 25px;
    margin-right: 2vw;
    text-align: center;
    border-radius: 7px;
    background-color: ${(props) => (props.isActive ? "#E9ECEF" : "")};
    color: ${(props) => (props.isActive ? "#343A40" : "#ADB5BD")};
`;

export const QuizTitleWrapper = styled.div`
    width: 100%;
    margin-bottom: 2%;
`;

export const QuizTitleTitle = styled.div``;

export const QuizTitleInput = styled.input`
    font-size: 18px;
    width: 50vw;
    height: 30px;
    border: none;
    border-bottom: 1.5px solid ${Colors.gray3};
    &:focus {
        outline: none;
        border-bottom: 1.5px solid #42F08E;
    }
`;

export const MultichoiceForm = styled.div`
    width: 100%;
    display: flex;
    ${flexCenter}
    .CorrectNumWords {
        color: ${Colors.black0};
    }
    .CorrectNumInputBox {
        width: 30px;
    }
    .MultichoiceFormWords {
        margin-bottom: 1.5%;
    }
`;

export const InQuizNum = styled.div`
    display: flex;
    margin-bottom: 1.2%; 
    position: relative;
    .num {
        ${flexCenter}
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid ${Colors.black2};
    }
    input {
        margin-left: 1%;
        width: 60%;
        height: 20px;
        border: none;
        border-bottom: 1.5px solid ${Colors.gray3};
        &:focus {
            outline: none;
            border-bottom: 1.5px solid #42F08E;
        }
    }
`;

export const CheckIcon = styled.svg.withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive',
})<IsActiveType>`
    position: absolute;
    top: -5px;
    width: 25px;
    height: 25px;
    fill: red;
    display: ${(prop) => prop.isActive ? "block" : "none"};
`;

export const QuizNavBtnWrapper = styled.div`
    ${flexCenter}
    justify-content: space-evenly;
    width: 100%;
    height: 10%;
    .CurrntNumInputBOx {
        width: 30px;
        height: 30px;
        text-align: center;
        font-size: 17px;
        border: 1px solid ${Colors.gray2};
        border-radius: 10px;
        &:focus {
            outline: none;
            border: 1px solid #42F08E;
        }
    }
`;

export const QuizNavBtn = styled.div`
    width: 120px;
    height: 100%;
    ${flexCenter}
    border-radius: 8px;
    border: 1px solid ${Colors.gray2};
    padding: 1%;
    .words {
        ${flexCenter}
        width: 80%;
    }
    .IconWrapper {
        width: 20%;
        ${flexCenter}
        svg {
            width: 15px;
            height: 15px;
        }
    }
`;

export const UnderQuizBtnWrapper = styled.div``;

export const ResizeLengthBtn = styled.div`
    margin-bottom: 10px;
    ${flexCenter}
    width: 10vw;
    height: 30px;
    background-color: #F0F4FE;
    color: #8DA8E0;
    border-radius: 7px;
`;

export const QuizDoneBtn = styled.div`
    ${flexCenter}
    width: 10vw;
    height: 30px;
    background-color: #8DA8E0;
    color: #F0F4FE;
    border-radius: 7px;
`;

export const TimerWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    ${flexColumnCenter}
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const TimeUpBtnBunddle = styled.div`
    width: 100%;
    height: 20%;
    ${flexCenter}
    border-radius: 8px 8px 0px 0px;
    background-color: #E9ECEF;
    .TimeUp {
        width: 50%;
        text-align: center;
    }
`;

export const TimeDownBtnBunddle = styled.div`
    width: 100%;
    height: 20%;
    ${flexCenter}
    background-color: #E9ECEF;
    border-radius: 0px 0px 8px 8px;
    .TimeDown {
        width: 50%;
        text-align: center;
    }
`;

export const ShowTimeWrapper = styled.div`
    width: 100%;
    height: 60%;
    ${flexCenter}
    .QuizTime {
        ${flexCenter}
        height: 100%;
        width: 50%;
        text-align: center;
    }
`;
