"use client";
import { useEffect, useRef, useCallback } from "react";

export function useSounds() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const pressBufferRef = useRef<AudioBuffer | null>(null);
  const releaseBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    // Initialize AudioContext
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    audioContextRef.current = ctx;

    // Load sounds
    const loadSound = async (url: string) => {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      return await ctx.decodeAudioData(arrayBuffer);
    };

    Promise.all([
      loadSound("/keycap-sounds/press.mp3"),
      loadSound("/keycap-sounds/release.mp3"),
    ]).then(([pressBuffer, releaseBuffer]) => {
      pressBufferRef.current = pressBuffer;
      releaseBufferRef.current = releaseBuffer;
    });

    return () => {
      if (ctx.state !== "closed") {
        ctx.close();
      }
    };
  }, []);

  const playBuffer = useCallback((buffer: AudioBuffer | null) => {
    const ctx = audioContextRef.current;
    if (!ctx || !buffer) return;

    // Resume context if suspended (browser autoplay policy)
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const source = ctx.createBufferSource();
    const gainNode = ctx.createGain();
    
    source.buffer = buffer;
    
    // Add small random detune (±100 cents) for realism
    source.detune.value = (Math.random() * 200) - 100;
    
    // Subtle volume randomization
    gainNode.gain.value = 0.8 + (Math.random() * 0.4);

    source.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    source.start(0);
  }, []);

  const playPressSound = useCallback(() => {
    playBuffer(pressBufferRef.current);
  }, [playBuffer]);

  const playReleaseSound = useCallback(() => {
    playBuffer(releaseBufferRef.current);
  }, [playBuffer]);

  return { playPressSound, playReleaseSound };
}
