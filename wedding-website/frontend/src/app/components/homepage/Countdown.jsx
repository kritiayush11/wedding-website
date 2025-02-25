"use client"; // Ensure this runs on the client side

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const Countdown = () => {
    // Set the wedding date (April 20, 2025, at 8:30 PM)
    const weddingDate = new Date("2025-04-20T20:30:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [celebrated, setCelebrated] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());

            // Trigger party popper when countdown reaches 0
            if (weddingDate - new Date().getTime() <= 0 && !celebrated) {
                setCelebrated(true);
                triggerConfetti();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [celebrated]);

    // Function to trigger confetti animation
    const triggerConfetti = () => {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
        });
    };

    return (
        <section className="w-full bg-pink-50 text-gray-800 py-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
                {timeLeft.days === 0 &&
                timeLeft.hours === 0 &&
                timeLeft.minutes === 0 &&
                timeLeft.seconds === 0
                    ? "It's Our Big Day! 🎉"
                    : "Save The Date!"}
            </h2>

            <div className="flex justify-center space-x-6 text-2xl font-semibold">
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <span className="block text-5xl font-light text-fuchsia-300">{timeLeft.days}</span>
                     Days
                </div>
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <span className="block text-5xl font-light text-fuchsia-300">{timeLeft.hours}</span> Hours
                </div>
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <span className="block text-5xl font-light text-fuchsia-300">{timeLeft.minutes}</span> Minutes
                </div>
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <span className="block text-5xl font-light text-fuchsia-300">{timeLeft.seconds}</span> Seconds
                </div>
            </div>
        </section>
    );
};

export default Countdown;
