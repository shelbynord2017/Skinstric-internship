import React, { useState } from 'react'

export default function RaceOptions({ aiData, setSelectedRace, setSelectedOption }) {
    const [race, setRace] = useState("latino hispanic")
    
    const percentage = aiData?.race?.[race]
        ? Math.round(aiData.race[race] * 100)
        : 0;

    const handleRadioChange = (event) => {
        setRace(event.target.value);
        setSelectedRace(event.target.value);
        setSelectedOption(event.target.value);
    };

  return (
    <div className="content">
        <div className="content__title">
            <h2>RACE</h2>
            <h2>A.I. CONFIDENCE</h2>
        </div>
        <div className='races__btns'>
            <label className='races__btn option__btn'>
                <input 
                    type="radio"
                    id="Latino-hispanic"
                    name="race"
                    value="latino hispanic"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='races'>Latino Hispanic</p>
                    <p className='category__percentage'>{Math.round((aiData?.race?.["latino hispanic"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='races__btn option__btn'>
                <input 
                    type="radio"
                    id="south-asian"
                    name="race"
                    value="south asian"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='races'>South Asian</p>
                    <p className='category__percentage'>{Math.round((aiData?.race?.["south asian"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='races__btn option__btn'>
                <input 
                    type="radio"
                    id="black"
                    name="race"
                    value="black"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='races'>Black</p>
                    <p className='category__percentage'>{Math.round((aiData?.race?.["black"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='races__btn option__btn'>
                <input 
                    type="radio"
                    id="east-asian"
                    name="race"
                    value="east asian"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='races'>East Asian</p>
                    <p className='category__percentage'>{Math.round((aiData?.race?.["east asian"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='races__btn option__btn'>
                <input 
                    type="radio"
                    id="southeast-asian"
                    name="race"
                    value="southeast asian"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='races'>Southeast Asian</p>
                    <p className='category__percentage'>{Math.round((aiData?.race?.["southeast asian"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='races__btn option__btn'>
                <input 
                    type="radio"
                    id="middle-eastern"
                    name="race"
                    value="middle eastern"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='races'>Middle Eastern</p>
                    <p className='category__percentage'>{Math.round((aiData?.race?.["middle eastern"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='races__btn option__btn'>
                <input 
                    type="radio"
                    id="white"
                    name="race"
                    value="white"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='races'>White</p>
                    <p className='category__percentage'>{Math.round((aiData?.race?.["white"] ?? 0) * 100)}%</p>
                </div>
            </label>
        </div>
    </div>
  )
}
