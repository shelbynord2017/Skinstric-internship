import React from 'react'
import rombuses from '../../assets/rombuses.png'

export default function LoadingAnalysis() {
  return (
    <div className='loading__wrapper'>
        <div className="rombuses">
            <img src={rombuses.src} className="rombuses__img" alt="" />
        </div>
        <h2 className='loading__analysis--text'>
            PREPARING YOUR ANALYSIS...
        </h2>
    </div>
  )
}
