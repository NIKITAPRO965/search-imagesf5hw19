import style from "./Modal.module.css"
import { useEffect } from "react"

function Modal({onImageUrl, onClose}){

    const handleEscClose = (evt) => {
        if(evt.code === "Escape") {
            onClose()
        }
    }

    const handleBackdropClose = (evt) => {
        if(evt.target === evt.currentTarget) {
            onClose()
        }
    }

    useEffect(()=>{
        window.addEventListener("keydown", handleEscClose)

        return ()=>{window.removeEventListener("keydown", handleEscClose)}
    }, [])


    return(<>
    <div onClick={handleBackdropClose} className={style.backdrop}>
        <div className={style.modal}>
        <img src={onImageUrl} alt="" />
        </div>

    </div>
    </>)
}


export default Modal