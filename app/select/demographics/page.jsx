'use client'

import React, { useState } from 'react'
import backButton from '../../../assets/back-btn.png'


export default function page() {
    const [race, setRace] = useState("Latino Hispanic")
    
    const handleRadioChange = (event) => {
        setRace(event.target.value);
    }
    
  return (
    <div className='container'>
        <div className="row demographics__row">
            <div className="demographics__text">
                <p className='select__title'>A.I. ANALYSIS</p>
                <h1 className='demographics__title'>DEMOGRAPHICS</h1>
                <h1 className='demographics__subtitle'>PREDICTED RACE & AGE</h1>
            </div>
            <div className="demographics__wrapper">
                <div className="categories">
                    <button className="race">
                        <p>RACE</p>
                    </button>
                    <button className="age">
                        <p>AGE</p>
                    </button>
                    <button className="sex">
                        <p>SEX</p>
                    </button>
                </div>
                <div className="display">
                    <div className="display__title">
                        <h2>East Asian</h2>
                    </div>
                    <div className="display__percentage">
                        
                    </div>
                </div>
                <div className="content">
                    <div className="content__title">
                        <h2>RACE</h2>
                        <h2>A.I. CONFIDENCE</h2>
                    </div>
                    <div className='races__btns'>
                        <label className='races__btn'>
                            <input 
                                type="radio"
                                id="Latino Hispanic"
                                name="race"
                                onChange={handleRadioChange}
                            />
                            <p className='races'>Latino hispanic</p>
                        </label>
                        <label className='races__btn'>
                            <input 
                                type="radio"
                                id="Latino Hispanic"
                                name="race"
                                onChange={handleRadioChange}
                            />
                            <p className='races'>South Asian</p>
                        </label>
                        <label className='races__btn'>
                            <input 
                                type="radio"
                                id="Latino Hispanic"
                                name="race"
                                onChange={handleRadioChange}
                            />
                            <p className='races'>Black</p>
                        </label>
                        <label className='races__btn'>
                            <input 
                                type="radio"
                                id="Latino Hispanic"
                                name="race"
                                onChange={handleRadioChange}
                            />
                            <p className='races'>East Asian</p>
                        </label>
                        <label className='races__btn'>
                            <input 
                                type="radio"
                                id="Latino Hispanic"
                                name="race"
                                onChange={handleRadioChange}
                            />
                            <p className='races'>Southeast Asian</p>
                        </label>
                        <label className='races__btn'>
                            <input 
                                type="radio"
                                id="Latino Hispanic"
                                name="race"
                                onChange={handleRadioChange}
                            />
                            <p className='races'>Middle Eastern</p>
                        </label>
                        <label className='races__btn'>
                            <input 
                                type="radio"
                                id="Latino Hispanic"
                                name="race"
                                onChange={handleRadioChange}
                            />
                            <p className='races'>White</p>
                        </label>
                    </div>
                </div>
            </div>
            <div className="page__buttons">
                <button>
                    <img src={backButton.src} alt="" />
                </button>
                <p className='page__buttons--text'>If A.I. estimate is wrong, select the correct one.</p>
                <div className="proceed__btns">
                    <button className='reset__btn'>RESET</button>
                    <button className='confirm__btn'>CONFIRM</button>
                </div>
            </div>
        </div>
    </div>
  )
}
