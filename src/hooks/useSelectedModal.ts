import { useModalStore } from "../store/useModalStore";

/**modal open + modal 이름 업데이트 */
const useSelectedModal=(modalName:string)=>{
    const {setModalState,setModalName}=useModalStore();
    const updateModalName=()=>{
        setModalState(true);
        setModalName(modalName);
    }
    return {updateModalName};
}
export default useSelectedModal;