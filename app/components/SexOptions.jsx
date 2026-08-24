import React, { useState } from 'react'

export default function RaceOptions({ aiData, setSelectedGender, setSelectedOption }) {
    const [gender, setGender] = useState("female")

    const percentage = aiData?.gender?.[gender]
        ? Math.round(aiData.gender[gender] * 100)
        : 0;

    const handleRadioChange = (event) => {
        setGender(event.target.value);
        setSelectedGender(event.target.value);
        setSelectedOption(event.target.value);
    }

  return (
    <div className="content">
        <div className="content__title">
            <h2>SEX</h2>
            <h2>A.I. CONFIDENCE</h2>
        </div>
        <div className='sex__btns'>
            <label className='sex__btn option__btn'>
                <input 
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='sexes'>Female</p>
                    <p className='category__percentage'>{Math.round((aiData?.gender?.["female"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='sex__btn option__btn'>
                <input 
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='sexes'>Male</p>
                    <p className='category__percentage'>{Math.round((aiData?.gender?.["male"] ?? 0) * 100)}%</p>
                </div>
            </label>
        </div>
    </div>
  )
}