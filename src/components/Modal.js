import React, { useRef, useEffect, useCallback } from 'react'
import ReactDom from 'react-dom'
import styles from './modal.module.css'

export default function Modal(props) {
    const { children, open, closeModal, title } = props
    const modalRef = useRef()

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && open) {
            closeModal()
        }
    }, [open, closeModal])

    function closeModalHandler(e) {
        e.stopPropagation()
        if (modalRef.current) {
            if (modalRef.current === e.target) {
                closeModal()
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    useEffect(() => {
        document.addEventListener('mousedown', closeModalHandler)
        return () => document.removeEventListener('mousedown', closeModalHandler)
    }, [])

    if (!open) { return null } // guard clause instead of if else
    return ReactDom.createPortal(
        <div className={styles.modal}>
            <div className={styles.modalBackground} ref={modalRef}></div>
            <div className={styles.modalContent}>
                <div>
                    {title && <h1 className={`${styles.modalHeader} font-effect-fire-animation`}>{title}</h1>}
                    {children ?
                        <>
                            {children}
                        </> :
                        <>No children gg</>
                    }
                </div>
                <button
                    onClick={closeModal}
                    className={styles.closeButton}>
                    Close modal
                </button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
