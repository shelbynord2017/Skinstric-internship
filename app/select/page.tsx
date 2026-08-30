'use client'

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
                    <div className="rombus rombus__small"></div>
                    <div className="rombus rombus__medium"></div>
                    <div className="rombus rombus__large"></div>

                    <div className="select__btns">
                        <button 
                        className="select__page--btn demographics__button"
                        onClick={() => router.push("/select/demographics")}>
                            <div className="select__btn--text">DEMOGRAPHICS</div>
                        </button>
                        <button className='select__page--btn cosmetic__btn'>
                            <div className="select__btn--text">COSMETIC CONCERNS</div>
                        </button>
                        <button className='select__page--btn weather__btn'>
                            <div className="select__btn--text">WEATHER</div>
                        </button>
                        <button className='select__page--btn skin__btn'>
                            <div className="select__btn--text">SKIN TYPE DETAILS</div>
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
