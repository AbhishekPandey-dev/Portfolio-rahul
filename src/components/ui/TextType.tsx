"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface TextTypeProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number;
  variableSpeedEnabled?: boolean;
  variableSpeedMin?: number;
  variableSpeedMax?: number;
  className?: string;
  cursorClassName?: string;
}

const TextType = ({
  texts,
  typingSpeed = 40,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "▎",
  cursorBlinkDuration = 0.7,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  className = "",
  cursorClassName = "",
}: TextTypeProps) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getSpeed = useCallback(() => {
    if (isDeleting) return deletingSpeed;
    if (variableSpeedEnabled) {
      return Math.floor(
        Math.random() * (variableSpeedMax - variableSpeedMin) + variableSpeedMin
      );
    }
    return typingSpeed;
  }, [
    isDeleting,
    deletingSpeed,
    typingSpeed,
    variableSpeedEnabled,
    variableSpeedMin,
    variableSpeedMax,
  ]);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentFullText = texts[textIndex % texts.length];

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentFullText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, getSpeed());
      } else {
        // Finished typing — pause
        setIsPaused(true);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, getSpeed());
      } else {
        // Finished deleting — move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, isPaused, textIndex, texts, pauseDuration, getSpeed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          className={`inline-block ${cursorClassName}`}
          style={{
            animation: `textTypeBlink ${cursorBlinkDuration}s step-end infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
