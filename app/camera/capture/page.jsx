'use client'

import React from 'react'
import backIconWhite from '../../../assets/back-icon-white.png'
import proceedButton from '../../../assets/proceed-button-white.png'
import bullet from '../../../assets/bullet-icon.png'
import takePic from '../../../assets/take-pic.png'
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingCamera from '../../components/LoadingCamera'

export default function page() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const router = useRouter();
    const [cameraLoading, setCameraLoading] = useState(true);

    //atomatically starts the webcam as soon as the page loads
    useEffect(() => {
        let activeStream = null;
        let cancelled = false;

        async function startCamera() {
            setCameraLoading(true);

            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'user' },
                    audio: false,
                });

                if (cancelled) {
                    mediaStream.getTracks().forEach((track) => track.stop());
                    return
                }

                activeStream = mediaStream;
                setStream(mediaStream);

                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (err) {
                console.error('Error accessing webcam:', err);
                setStatus('Could not access camera. Please grant permissions.')
            } finally {
                setCameraLoading(false);
            }
        }

        startCamera();

        //clean up: stops the camera stream if the user clicks 'back' or leaves the page
        return () => {
            cancelled = true;
            activeStream?.getTracks().forEach((track) => track.stop());

            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        };
    }, []);

    const stopCamera = () => {
        const currentStream = videoRef.current?.srcObject;

        if (currentStream) {
            currentStream.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }

        setStream(null);
    };

    const captureAndPost = async () => {
        if (!videoRef.current || !canvasRef.current) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageString = canvas.toDataURL('image/jpeg', 0.8);
        setLoading(true);
        setStatus('Uploading...');

        try {
        const response = await fetch(
            "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
            {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: imageString }),
        });

        const data = await response.json();

        console.log("Phase Three response:", data);

        if (response.ok) {
            setStatus('GREAT SHOT');
        
            sessionStorage.setItem(
                "analysisData",
                JSON.stringify(data.data)
            );

            if (videoRef.current?.srcObject) {
            videoRef.current.srcObject
                .getTracks()
                .forEach((track) => track.stop());
            }

            stopCamera();

            router.push("/select");
        } else {
            setStatus('Upload failed.');
        }

        console.log(data)
        } catch (error) {
        setStatus('Network error occurred.');
        } finally {
        setLoading(false);
        }
    }

  return (
    <div className="container">
        {cameraLoading && <LoadingCamera />}
    
            <div className="selfie__row">
            <div className="upper__section">
                <div className="camera__container">
                    <video 
                        className="video__screen"
                        ref={videoRef}
                        autoPlay
                        playsInline 
                        muted
                    />
                    {status && <p className='camera__status'>{status}</p>}
                </div>
                

                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <button 
                onClick={captureAndPost}
                disabled={loading || !stream}
                className="selfie__camera--wrapper">
                    <img src={takePic.src} className="take__pic" alt="" />
                    {loading ? 'Uploading...' : ''}
                </button>
            </div>
            <div className="lower__section">
                <button
                onClick={() => router.push('/result')}>
                    <img src={backIconWhite.src} className="backIconWhite" alt="" />
                </button>
                
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
                <button
                onClick={() => router.push('/select')}>
                    <img src={proceedButton.src} className='proceed__button' alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}



