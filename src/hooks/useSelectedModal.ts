import { useModalStore } from "../store/useModalStore";

/**modal open + modal 이름 업데이트 */
const useSelectedModal=(modalName:string,modalSize:string)=>{
    const {setModalState,setModalName,setModalSize}=useModalStore();
    const updateModalName=()=>{
        setModalState(true);
        setModalName(modalName);
        setModalSize(modalSize);
    }
    return {updateModalName};
}
export default useSelectedModal;