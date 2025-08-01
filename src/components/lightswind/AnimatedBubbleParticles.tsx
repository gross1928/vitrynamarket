"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils"; // Assuming this is a utility like clsx or classnames

export interface ParticleConfig {
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  rotation: number;
  rotationDirection: string;
  siner: number;
  steps: number;
  friction: number;
  element: Element | null;
}

export interface AnimatedBubbleParticlesProps {
  /** Container class name */
  className?: string;
  /** Background color (used if no background class provided in className) */
  backgroundColor?: string; // Keep this prop for fallback
  /** Particle color */
  particleColor?: string;
  /** Particle size in pixels */
  particleSize?: number;
  /** Spawn interval in milliseconds */
  spawnInterval?: number;
  /** Container height */
  height?: string; // This can be '100vh', '500px', etc.
  /** Container width */
  width?: string; // This can be '100vw', 'full', '80%', '500px', etc.
  /** Enable gooey blur effect */
  enableGooEffect?: boolean;
  /** Blur strength for goo effect */
  blurStrength?: number;
  /** Pause animation when window is not focused */
  pauseOnBlur?: boolean;
  /** Z-index for layering */
  zIndex?: number;
  /** Friction range for particle movement */
  friction?: { min: number; max: number };
  /** Scale range for particles */
  scaleRange?: { min: number; max: number };
  /** Content to be displayed inside the particle container */
  children?: React.ReactNode;
}

const AnimatedBubbleParticles: React.FC<AnimatedBubbleParticlesProps> = ({
  className,
  backgroundColor = "#edf3f8", // Default fallback background color
  particleColor = "#3e82f7",
  particleSize = 30,
  spawnInterval = 180,
  height = "100vh", // Default to 100vh for full viewport height
  width = "100vw", // Default to 100vw for full viewport width
  enableGooEffect = true,
  blurStrength = 12,
  pauseOnBlur = true,
  zIndex = 1,
  friction = { min: 1, max: 2 },
  scaleRange = { min: 0.4, max: 2.4 },
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const intervalRef = useRef<number>();
  const particlesArrayRef = useRef<ParticleConfig[]>([]);
  const isPausedRef = useRef(false);
  const gooIdRef = useRef('goo-' + Math.random().toString(36).substring(2, 11));

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const createParticleElement = useCallback(() => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.cssText =
      "display: block;" +
      "width: " +
      particleSize +
      "px;" +
      "height: " +
      particleSize +
      "px;" +
      "position: absolute;" +
      "transform: translateZ(0px);";
    svg.setAttribute("viewBox", "0 0 67.4 67.4");

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", "33.7");
    circle.setAttribute("cy", "33.7");
    circle.setAttribute("r", "33.7");
    circle.setAttribute("fill", particleColor);

    svg.appendChild(circle);
    return svg;
  }, [particleSize, particleColor]);

  const createParticle = useCallback((): ParticleConfig => {
    const element = createParticleElement();
    if (particlesRef.current) {
      particlesRef.current.appendChild(element);
    }

    const x = Math.random() * dimensions.width;
    const y = dimensions.height + 100;
    const steps = dimensions.height / 2;
    const frictionValue =
      friction.min + Math.random() * (friction.max - friction.min);
    const scale =
      scaleRange.min + Math.random() * (scaleRange.max - scaleRange.min);
    const siner = (dimensions.width / 2.5) * Math.random();
    const rotationDirection = Math.random() > 0.5 ? "+" : "-";

    element.style.transform =
      "translateX(" + x + "px) translateY(" + y + "px)";

    return {
      x,
      y,
      vx: 0,
      vy: 0,
      scale,
      rotation: 0,
      rotationDirection,
      siner,
      steps,
      friction: frictionValue,
      element,
    };
  }, [createParticleElement, dimensions, friction, scaleRange]);

  const updateParticle = (particle: ParticleConfig): boolean => {
    particle.y -= particle.friction;

    const left =
      particle.x +
      Math.sin((particle.y * Math.PI) / particle.steps) * particle.siner;
    const top = particle.y;
    const rotation = particle.rotationDirection + (particle.y + particleSize);

    if (particle.element) {
      const element = particle.element as SVGElement;
      element.style.transform =
        "translateX(" +
        left +
        "px) translateY(" +
        top +
        "px) scale(" +
        particle.scale +
        ") rotate(" +
        rotation +
        "deg)";
    }

    if (particle.y < -particleSize) {
      if (particle.element && particle.element.parentNode) {
        particle.element.parentNode.removeChild(particle.element);
      }
      return false;
    }

    return true;
  };

  const animate = useCallback(() => {
    if (isPausedRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    particlesArrayRef.current =
      particlesArrayRef.current.filter(updateParticle);

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const spawnParticle = useCallback(() => {
    if (!isPausedRef.current && dimensions.width > 0 && dimensions.height > 0) {
      const particle = createParticle();
      particlesArrayRef.current.push(particle);
    }
  }, [dimensions, createParticle]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!pauseOnBlur) return;

    const handleBlur = () => {
      isPausedRef.current = true;
    };
    const handleFocus = () => {
      isPausedRef.current = false;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [pauseOnBlur]);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      animationRef.current = requestAnimationFrame(animate);
      intervalRef.current = window.setInterval(spawnParticle, spawnInterval);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      particlesArrayRef.current.forEach((particle) => {
        if (particle.element && particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      particlesArrayRef.current = [];
    };
  }, [dimensions, spawnInterval, animate, spawnParticle]);

  // Determine the background class to apply
  const backgroundClass = (() => {
    // Check if a 'bg-' class is already present in the user-provided className
    if (className && className.split(' ').some(cls => cls.startsWith('bg-'))) {
      return ''; // User provided a background class, don't add default
    }
    // If no 'bg-' class is found, use the backgroundColor prop as a Tailwind arbitrary value
    return `bg-[${backgroundColor}]`;
  })();

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        "w-screen h-screen", // Always apply full screen width and height
        backgroundClass, // Apply the determined background class here
        className // User's className comes last to ensure highest precedence
      )}
      style={{
        zIndex,
        // Explicitly set width and height from props, overriding Tailwind defaults if provided
        width: width,
        height: height,
      }}
    >
      <div
        ref={particlesRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          filter: enableGooEffect ? "url(#" + gooIdRef.current + ")" : undefined,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 w-full h-full">
        {children}
      </div>

      {enableGooEffect && (
        <svg className="absolute w-0 h-0 z-0">
          <defs>
            <filter id={gooIdRef.current}>
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation={blurStrength}
              />
              <feColorMatrix
                in="blur"
                result="colormatrix"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              />
              <feBlend in="SourceGraphic" in2="colormatrix" />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};

export { AnimatedBubbleParticles };
export default AnimatedBubbleParticles;
