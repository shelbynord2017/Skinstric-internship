'use client'

import rombuses from '../../assets/rombuses.png'
import demographics from '../../assets/demographics.png'
import cosmeticConcerns from '../../assets/cosmetic-concerns.png'
import weather from '../../assets/weather.png'
import skinTypeDetails from '../../assets/skin-type-details.png'
import backButton from '../../assets/back-btn.png'
import getSummary from '../../assets/get-summary-btn.png'
import { useRouter } from 'next/navigation'


export default function page() {
    const router = useRouter();

  return (
    <div className='container'>
        <div className="row selected__row">
            <p className='select__title'>A.I. ANALYSIS</p>
            <p className='select__subtitle'>
                A.I. HAS ESTIMATED THE FOLLOWING. <br />
                FIX ESTIMATED INFORMATION IF NEEDED.
            </p>
            <div className="select__wrapper">
                <div className="rombuses">
                    <img src={rombuses.src} className="select__rombuses--img" alt="" />
                    <div className="select__btns">
                        <button 
                        className='dem__btn'
                        onClick={() => router.push("/select/demographics")}>
                            <img 
                            src={demographics.src} className="demographics" alt="" />
                        </button>
                        <button className='cosmetic__btn'>
                            <img src={cosmeticConcerns.src} className='cosmeticConcerns' alt="" />
                        </button>
                        <button className='weather__btn'>
                            <img src={weather.src} className='weather' alt="" />
                        </button>
                        <button className='skin__btn'>
                            <img src={skinTypeDetails.src} className='skinTypeDetails' alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="page__buttons">
                <button
                onClick={() => router.push('/result')}>
                    <img src={backButton.src} className="select__back--btn" alt="" />
                </button>
                <button
                onClick={() => router.push('/select/demographics')}>
                    <img src={getSummary.src} className="select__summary--btn" alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}
