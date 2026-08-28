import React from 'react'
import rombuses from '../../assets/rombuses.png'
import camera from '../../assets/camera.png'
import bullet from '../../assets/bullet-icon.png'

export default function LoadingAnalysis() {
  return (
    <div className="loading__row">
        <div className='loading__wrapper'>
            <div className="loading__upper">
                <div className="rombuses">
                    <img src={rombuses.src} className="loading__rombuses--img" alt="" />
                </div>
                <div className='loading__camera--text'>
                    <img src={camera.src} className="loading__camera--img" alt="" />
                    <h2 className='loading__camera'>
                        SETTING UP CAMERA
                        <div class="loader">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </h2>
                </div>
            </div>
        
            <div className="picture__guidelines">
                <p className='picture__guidelines--title'>TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
                <div className="picture__bullets">
                    <div className='picture__bullet'>
                        <img src={bullet.src} className="bullet" alt="" />
                        <p className='bullet__text'>NEUTRAL EXPRESSION</p>
                    </div>
                    <div className='picture__bullet'>
                        <img src={bullet.src} className="bullet" alt="" />
                        <p className='bullet__text'>FRONTAL POSE</p>
                    </div>
                    <div className='picture__bullet'>
                        <img src={bullet.src} className="bullet" alt="" />
                        <p className='bullet__text'>ADEQUATE LIGHTING</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}