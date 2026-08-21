'use client'

import React, { useState } from 'react'
import rombuses from '../../assets/rombuses.png'
import camera from '../../assets/camera.png'
import cameraText from '../../assets/camera-text.png'
import gallery from '../../assets/gallery.png'
import galleryText from '../../assets/gallery-text.png'
import backButton from '../../assets/back-btn.png'
import { useRouter } from 'next/navigation';

export default function page() {
    const [image, setImage] = useState<File | null>(null);
    const router = useRouter();

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
            <div className="results__wrapper">
                <div className="results__rombuses">
                    <img src={rombuses.src} className="results__rombuses__img" alt="" />
                </div>
                <div className="camera">
                    <img src={camera.src} className="camera__img" alt="" />
                    <img src={cameraText.src} className="camera__text" alt="" />
                </div>
                <div className="results__rombuses">
                    <img src={rombuses.src} className="results__rombuses__img" alt="" />
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
                <button>
                    <img src={backButton.src} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}
