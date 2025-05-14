// src/components/Vanta.js
import { useEffect, useRef } from "react";

const Vanta = () => {
  const myRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // External script loading
    const script1 = document.createElement("script");
    script1.src =
      "https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js";
    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src =
        "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js";
      script2.onload = () => {
        if (window.VANTA) {
          window.VANTA.WAVES({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x141014,
            shininess: 21.00,
            waveHeight: 16.00,
            waveSpeed: 0.40,
            zoom: 0.98
          });
        }
      };
      document.body.appendChild(script2);
    };
    document.body.appendChild(script1);

    // Clean up VANTA effect on component unmount
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy(); // Vantaエフェクトを適切にクリーンアップ
      }
    };
  }, []);

  return <div className="vanta-bg" ref={myRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Vanta;
