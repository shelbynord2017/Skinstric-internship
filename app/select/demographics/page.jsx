'use client'

import React, { useEffect, useState } from 'react'
import backButton from '../../../assets/back-btn.png'
import RaceOptions from '../../components/RaceOptions'
import AgeOptions from '../../components/AgeOptions'
import SexOptions from '../../components/SexOptions'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter();
    const [category, setCategory] = useState('race');
    const [aiData, setAiData] = useState(null);
    const [selectedOption, setSelectedOption] = useState("latino hispanic");
    const [selectedRace, setSelectedRace] = useState('latino hispanic')
    const [selectedAge, setSelectedAge] = useState('0-2')
    const [selectedGender, setSelectedGender] = useState('female')
    const [categorySelected, setCategorySelected] = useState('race')

    const percentage = aiData?.[category]?.[selectedOption]
        ? Math.round(aiData[category][selectedOption] * 100)
        : 0;

    useEffect(() => {
        const storedData = sessionStorage.getItem("analysisData");

        if (storedData) {
            setAiData(JSON.parse(storedData));
        }
    }, []);
    
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
                    <button 
                    onClick={() => {
                        setCategory('race');
                        setCategorySelected('race');
                    }}
                    className={`race select__btn ${categorySelected === 'race' ? 'selected' : ''}`}>
                        <p className='category__option'>{selectedRace.charAt(0).toUpperCase() + selectedRace.slice(1)}</p>
                        <p className='category__option--text'>RACE</p>
                    </button>
                    <button 
                    onClick={() => {
                        setCategory('age');
                        setCategorySelected('age');
                    }}
                    className={`age select__btn ${categorySelected === 'age' ? 'selected' : ''}`}>
                        <p className='category__option'>{selectedAge.charAt(0).toUpperCase() + selectedAge.slice(1)}</p>
                        <p className='category__option--text'>AGE</p>
                    </button>
                    <button 
                    onClick={() => {
                        setCategory('gender');
                        setCategorySelected('gender');
                    }}
                    className={`sex select__btn ${categorySelected === 'gender' ? 'selected' : ''}`}>
                        <p className='category__option'>{selectedGender.charAt(0).toUpperCase() + selectedGender.slice(1)}</p>
                        <p className='category__option--text'>SEX</p>
                    </button>
                </div>
                <div className="display">
                    <div className="display__title"> 
                        <h2>{selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}</h2> 
                    </div>
                    <div className="percentage__ring">
                        <div 
                            className="percentage__ring--outer"
                            style={{
                                background: `conic-gradient(#000 ${percentage}%, #ddd ${percentage}% 100%)`,
                            }}
                        >
                            <div className="percentage__ring--inner">
                                {percentage}%
                            </div>   
                        </div>
                    </div>
                </div>
                {category === "race" && <RaceOptions aiData={aiData} setSelectedRace={setSelectedRace} setSelectedOption={setSelectedOption}/>}
                {category === "age" && <AgeOptions aiData={aiData} setSelectedAge={setSelectedAge} setSelectedOption={setSelectedOption}/>}
                {category === "gender" && <SexOptions aiData={aiData} setSelectedGender={setSelectedGender} setSelectedOption={setSelectedOption}/>}
            </div>
            <div className="page__buttons">
                <button
                onClick={() => router.push('/select')}>
                    <img src={backButton.src} alt="" />
                </button>
                <p className='page__buttons--text'>If A.I. estimate is wrong, select the correct one.</p>
                <div className="proceed__btns">
                    <button className='reset__btn'>RESET</button>
                    <button 
                    onClick={() => router.push('/result')}
                    className='confirm__btn'>
                        CONFIRM
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
