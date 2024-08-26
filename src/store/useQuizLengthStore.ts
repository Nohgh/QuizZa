import { create } from "zustand";

type QuizLengthType={
    quizLength:number;
    setQuizLength:(num:number)=>void;
}
/**quizLength, setQuizLength */
export const useQuizLengthStore=create<QuizLengthType>((set)=>({
    quizLength:0,
    setQuizLength:(num:number)=>set({quizLength:num})
}));