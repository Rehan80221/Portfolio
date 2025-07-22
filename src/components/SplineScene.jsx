// src/components/SplineScene.jsx
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const SplineScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);

    app.load(
      "https://prod.spline.design/Ly2jxbz0jMvrJPvA/scene.splinecode"
    );

    return () => app.dispose();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
};

export default SplineScene;
