import { useEffect, useRef } from 'react';

const InteractiveBubble = () => {
  const interBubbleRef = useRef(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);

  useEffect(() => {
    // Get the reference to the interactive bubble element
    const interBubble = interBubbleRef.current;

    // Function to animate the movement of the bubble
    function move() {
      // Update current coordinates towards target coordinates for smooth movement
      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;

      // Apply the transformation to the bubble element
      interBubble.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`;

      requestAnimationFrame(move);
    }

    // Event handler to update target coordinates on mouse movement
    const handleMouseMove = (event) => {
      tgX.current = event.clientX;
      tgY.current = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    move();

    return () => {
      // Cleanup: remove the event listener when the component is unmounted
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="interactive" ref={interBubbleRef}></div>
  );
};

export default InteractiveBubble;
