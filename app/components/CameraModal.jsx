import React from 'react'
import { useRouter } from 'next/navigation'

export default function CameraModal({ closeModal }) {
  const router = useRouter();


  return (
    <div className='modal__wrapper'>
        <div className="upper__modal">
            <h2 className='modal__text'>ALLOW A.I. TO ACCESS YOUR CAMERA</h2>
        </div>
        <div className="lower__modal">
            <button 
            className='modal__btn modal__text--btn'
            onClick={closeModal}>
              DENY
            </button>
            <button 
            className='modal__btn modal__text--btn'
            onClick={() => router.push('/camera/capture')}>
              ALLOW
            </button>
        </div>
    </div>
  )
}
