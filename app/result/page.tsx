'use client'

import React, { useState } from 'react'
import rombuses from '../../assets/rombuses.png'
import camera from '../../assets/camera.png'
import cameraText from '../../assets/camera-text.png'
import gallery from '../../assets/gallery.png'
import galleryText from '../../assets/gallery-text.png'
import backButton from '../../assets/back-btn.png'
import { useRouter } from 'next/navigation';
import CameraModal from '../components/CameraModal'
import LoadingAnalysis from '../components/LoadingAnalysis'
import LoadingCamera from '../components/LoadingCamera'

export default function page() {
    const [image, setImage] = useState<File | null>(null);
    const router = useRouter();
    const [loadingCamera, setLoadingCamera] = useState(true)
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = async () => {
            if (typeof reader.result !== "string") return;

            const base64Image = reader.result.split(",")[1];

            try {
            const response = await fetch(
                "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    image: base64Image,
                }),
                }
            );

            const data = await response.json();

            console.log("Phase Two response:", data);

            if (!response.ok) {
            throw new Error(
                data.message || data.error || "Image upload failed."
            );
            }

            sessionStorage.setItem(
                "analysisData",
                JSON.stringify(data.data)
            );

            router.push("/select");

            console.log(data);
            } catch (error) {
            console.error(error);
            }
        };

        reader.readAsDataURL(file);
    };

  return (
    <div className='container'>
        <div className="row results__row">
            <p>TO START ANALYSIS</p>
            {/* <LoadingAnalysis/> */}
            {/* <LoadingCamera/> */}
            <div className="results__wrapper">
                <div className="results__rombuses">
                    <img src={rombuses.src} className="results__rombuses--img" alt="" />
                </div>
                <button 
                onClick={openModal}
                className="camera">
                    <img src={camera.src} className="camera__img" alt="" />
                    <img src={cameraText.src} className="camera__text" alt="" />
                </button>
                {isOpen && (
                    <CameraModal closeModal={closeModal} />
                )}
                <div className="results__rombuses">
                    <img src={rombuses.src} className="results__rombuses--img" alt="" />
                </div>
                <label htmlFor='gallery-upload' className="gallery">
                    <img src={gallery.src} className="gallery__img" alt="" />
                    <img src={galleryText.src} className="gallery__text" alt="" />
                </label>
                <input
                    id="gallery-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    hidden
                />
            </div>
            <div className="page__buttons">
                <button
                onClick={() => router.push('/testing')}
                >
                    <img src={backButton.src} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}



