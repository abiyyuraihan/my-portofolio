import React, { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const neurons = [];
    const numNeurons = Math.floor((window.innerWidth * window.innerHeight) / 10000); // Adjust neuron density

    for (let i = 0; i < numNeurons; i++) {
      neurons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25
      });
    }

    const drawNeurons = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';

      neurons.forEach((neuron, i) => {
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2);
        ctx.fill();

        neurons.slice(i + 1).forEach(otherNeuron => {
          const distance = Math.sqrt(
            Math.pow(neuron.x - otherNeuron.x, 2) + Math.pow(neuron.y - otherNeuron.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(otherNeuron.x, otherNeuron.y);
            ctx.stroke();
          }
        });

        neuron.x += neuron.vx;
        neuron.y += neuron.vy;

        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(drawNeurons);
    };

    drawNeurons();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-screen h-screen"
      style={{ opacity: 0.3 }}
    />
  );
};

export default NeuralBackground;