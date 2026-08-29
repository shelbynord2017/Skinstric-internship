import React from 'react'
import rombuses from '../../assets/rombuses.png'

export default function LoadingAnalysis() {
  return (
    <div className='loading__wrapper'>
        <div className="small__diamonds--nested">
          <div className="small__diamonds small__diamond--outer">
              <div className="small__diamonds small__diamond--middle">
                  <div className="small__diamonds small__diamond--inner"></div>
              </div>
          </div>
          <h2 className='loading__analysis--text'>
              PREPARING YOUR ANALYSIS...
          
          
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
