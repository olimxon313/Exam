import React, { useRef, useState, useEffect } from "react";
import Music from "../../../assets/Music/music.mp3";
import "./style.scss";

function MusicPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleSeek = (e) => {
        const seekTime = e.target.value;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("loadedmetadata", () => {
            setDuration(audio.duration);
        });

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    // Функция для генерации случайного цвета
    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    };

    return (
        <div className={`music-player ${isPlaying ? "active" : ""}`}>
            <audio ref={audioRef} src={Music} />
            <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>

            {isPlaying && (
                <div className="bubbles">
                    <div className="bubble" style={{ backgroundColor: randomColor() }}></div>
                    <div className="bubble" style={{ backgroundColor: randomColor() }}></div>
                    <div className="bubble" style={{ backgroundColor: randomColor() }}></div>
                </div>
            )}

            {isPlaying && (
                <div className="progress-container">
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        className="progress-bar"
                    />
                </div>
            )}
        </div>
    );
}

export default MusicPlayer;
