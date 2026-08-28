import React from 'react'
import rombuses from '../../assets/rombuses.png'

export default function LoadingAnalysis() {
  return (
    <div className='loading__wrapper'>
        <div className="rombuses">
          <img src={rombuses.src} className="loading__rombuses--img" alt="" />
          <h2 className='loading__analysis--text'>
              PREPARING YOUR ANALYSIS
          
          
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
          </h2>
        </div>
    </div>
  )
}
