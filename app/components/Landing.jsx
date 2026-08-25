'use client'

import React from 'react'
import leftButton from '../../assets/left-button-icon-text.png'
import rightButton from '../../assets/right-button-icon-text.png'
import leftRectangle from '../../assets/left-rectangle.png'
import rightRectangle from '../../assets/right-rectangle.png'
import { useRouter } from 'next/navigation'

export default function Landing() {
    const router = useRouter();

  return (
    <div className='landing__container'>
        <div className="landing__row">
            <div className="landing__wrapper">
                <div className="landing__content">
                    <div className="landing__upper">
                        <div className="landing__left">
                            <div>
                                <img src={leftRectangle.src} className="rectangle__left" alt="" />
                            </div>
                            <div className="landing__left--btn">
                                <img src={leftButton.src} alt="" />
                            </div>
                        </div>
                        <div className="landing__content--title">
                            <h1 className='content__title--text'>Sophisticated<br />skincare</h1>
                        </div>
                        <div className="landing__right">
                            <div>
                                <img src={rightRectangle.src} className="rectangle__right" alt="" />
                            </div>
                            <button 
                            onClick={() => router.push('/testing')}
                            className="landing__right--btn">
                                <img src={rightButton.src} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="landing__lower">
                        <div className="landing__content--text">
                            SKINSTRIC DEVELOPED AN A.I. THAT CREATES A 
                            HIGHLY-PERSONALIZED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
