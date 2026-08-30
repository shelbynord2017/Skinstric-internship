'use client'

import React from 'react'
import backButton from '../../assets/back-btn.png'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function page() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState<'name' | 'location'>('name');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 'name') {
      if (!name.trim()) return;
      setStep('location');
      return;
    }

    try {
      const response= await fetch(
        'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, location }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Please enter a valid response."
          )
        } 
        router.push('/result')
      } catch (err) {
        setError('Something went wrong. Please try again.')
      }
  };
  
  return (
    <div className='container'>
        <div className="row testing__row">
          <p>TO START ANALYSIS</p>
          <div className="testing__wrapper">
      
            <div className="large__diamonds--nested">
              <div className="large__diamonds large__diamond--outer">
                <div className="large__diamonds large__diamond--middle">
                  <div className="large__diamonds large__diamond--inner"></div>
                </div>
              </div>
            </div>

            <form 
            onSubmit={handleSubmit}
            className='demographics__input'>
              <p className='input__title'>CLICK TO TYPE</p>
              {error && <p>{error}</p>}
              {step === 'name' ? (
                <input 
                  className='demographics__input--text'
                  type="text" 
                  placeholder='Introduce Yourself'
                  // name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <input
                  className='demographics__input--text'
                  type="text"
                  placeholder="Where are you from?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              )}
            </form>
          </div>
          <div className="page__buttons">
            <button
            className='testing__page--btn'
            onClick={() => router.push('/')}>
              <img src={backButton.src} alt="" />
            </button>
          </div>
        </div>
    </div>
 )
}
