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
                            <div className="rectangle__left">
                                <img src={leftRectangle.src} className="rectangle__left--img" alt="" />
                                <div className="landing__left--btn-wrapper">
                                    <img src={leftButton.src} className="landing__left--btn" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="landing__content--title">
                            <h1 className='content__title--text'>Sophisticated<br />skincare</h1>
                            <button 
                                onClick={() => router.push('/testing')}
                                className="landing__middle--btn-wrapper">
                                    <img src={rightButton.src} className="landing__middle--btn" alt="" />
                            </button>
                        </div>
                        <div className="landing__right">
                            <div className="rectangle__right">
                                <img src={rightRectangle.src} className="rectangle__right--img" alt="" />
                                <button 
                                onClick={() => router.push('/testing')}
                                className="landing__right--btn-wrapper">
                                    <img src={rightButton.src} className="landing__right--btn" alt="" />
                                </button>
                            </div>
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
