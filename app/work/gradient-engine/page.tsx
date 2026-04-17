"use client";
import { useState } from 'react';


  
export default function GradientEnginePage(){
  
  const [duration, setDuration] = useState(4);
  
  return(
    
    <main style={{ "--duration": `${duration}s` } as React.CSSProperties }>
     
    <style>{`
    
      @property --angle {
        syntax: "<angle>";
        inherits: false;
        initial-value: 0deg;
        }
    
         @keyframes spin { 
          to { --angle: 360deg; }
        }
      
        .gradient-canvas { 
            width: 100%;
            height: 100vh;
            background: conic-gradient(from var(--angle), red, blue, green, red);
            // animation: spin 4s linear infinite;
            animation: spin var(--duration) linear infinite;
          }
    
    `} </style>
     
    <div className="gradient-canvas"/>
    <input 
    
      type="range"
      min={0.5}
      max={10}
      step={0.1}
      value={duration}
      onChange={(e) => setDuration(Number(e.target.value))}
  
    />
    
    
    
    </main>
  );

}