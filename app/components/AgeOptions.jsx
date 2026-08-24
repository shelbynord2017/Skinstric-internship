import React, { useState } from 'react'

export default function RaceOptions({ aiData, setSelectedAge, setSelectedOption }) {
    const [age, setAge] = useState("0-2")

    const percentage = aiData?.age?.[age]
        ? Math.round(aiData.age[age] * 100)
        : 0;

    const handleRadioChange = (event) => {
        setAge(event.target.value);
        setSelectedAge(event.target.value);
        setSelectedOption(event.target.value);
    }

  return (
    <div className="content">
        <div className="content__title">
            <h2>AGE</h2>
            <h2>A.I. CONFIDENCE</h2>
        </div>
        <div className='ages__btns'>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="0-2"
                    name="age"
                    value="0-2"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>0-2</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["0-2"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="3-9"
                    name="age"
                    value="3-9"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>3-9</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["3-9"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="10-19"
                    name="age"
                    value="10-19"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>10-19</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["10-19"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="20-29"
                    name="age"
                    value="20-29"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>20-29</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["20-29"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="30-39"
                    name="age"
                    value="30-39"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>30-39</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["30-39"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="40-49"
                    name="age"
                    value="40-49"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>40-49</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["40-49"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="50-59"
                    name="age"
                    value="50-59"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>50-59</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["50-59"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="60-69"
                    name="age"
                    value="60-69"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>60-69</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["60-69"] ?? 0) * 100)}%</p>
                </div>
            </label>
            <label className='ages__btn option__btn'>
                <input 
                    type="radio"
                    id="70+"
                    name="age"
                    value="70+"
                    onChange={handleRadioChange}
                />
                <div className="radio__btn">
                    <p className='ages'>70+</p>
                    <p className='category__percentage'>{Math.round((aiData?.age?.["70+"] ?? 0) * 100)}%</p>
                </div>
            </label>
        </div>
    </div>
  )
}