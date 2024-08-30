import { create } from "zustand";
interface QuizStepType{
    createStep:number;
    setCreateStep:(num:number)=>void;
}
export const useQuizStep= create<QuizStepType>((set)=>({
    createStep:0,
    setCreateStep:(num:number)=>set({createStep:num})
}))