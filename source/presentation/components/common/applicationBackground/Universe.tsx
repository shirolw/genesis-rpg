/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

interface IStarProps {
  xAxis: number;
  yAxis: number;
  zAxis: number;
}

const STARS_NUMBER = 1000;

const STARS_SPEED = 0.5;

const stars: IStarProps[] = [];

export default function Universe(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function handleStartStars(canvasWidth: number, canvasHeight: number): void {
    const newStars: IStarProps[] = Array.from({ length: STARS_NUMBER }, () => ({
      xAxis: Math.random() * canvasWidth - canvasWidth / 2,
      yAxis: Math.random() * canvasHeight - canvasHeight / 2,
      zAxis: Math.random() * canvasWidth,
    }));

    newStars.forEach((star) => stars.push(star));
  }

  function handleAnimateStars(
    canvasContext: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) {
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

    stars.forEach((star) => {
      star.zAxis -= STARS_SPEED;

      if (star.zAxis <= 0) {
        star.xAxis = Math.random() * canvasWidth - canvasWidth / 2;
        star.yAxis = Math.random() * canvasHeight - canvasHeight / 2;
        star.zAxis = canvasWidth;
      }

      const projectionFactor = 128.0 / star.zAxis;

      const projectedX = star.xAxis * projectionFactor + canvasWidth / 2;

      const projectedY = star.yAxis * projectionFactor + canvasHeight / 2;

      const XAxisInsideScreen = projectedX >= 0 && projectedX <= canvasWidth;

      const YAxisInsideScreen = projectedY >= 0 && projectedY <= canvasHeight;

      if (XAxisInsideScreen && YAxisInsideScreen) {
        const starSize = (1 - star.zAxis / canvasWidth) * 2;

        const starColorCalc = (1 - star.zAxis / canvasWidth) * 255;

        const starShade = parseInt(starColorCalc.toString(), 10);

        canvasContext.beginPath();

        canvasContext.fillStyle = `rgb(${starShade}, ${starShade}, ${starShade})`;

        canvasContext.arc(projectedX, projectedY, starSize, 0, Math.PI * 2);

        canvasContext.fill();
      }
    });

    requestAnimationFrame(() =>
      handleAnimateStars(canvasContext, canvasWidth, canvasHeight)
    );
  }

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const canvasContext = canvas.getContext("2d");

    if (!canvasContext) return;

    const { innerHeight, innerWidth } = window;

    const canvasWidth = innerWidth;
    const canvasHeight = innerHeight;

    canvas.width = canvasWidth;

    canvas.height = canvasHeight;

    handleStartStars(canvasWidth, canvasHeight);
    handleAnimateStars(canvasContext, canvasWidth, canvasHeight);
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
}
