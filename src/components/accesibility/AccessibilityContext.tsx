import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  fontSize: number;
  textSpacing: boolean;
  highContrast: boolean;
  highlightLinks: boolean;
  pauseAnimations: boolean;
  hideImages: boolean;
  dyslexiaFont: boolean;
  largeCursor: boolean;
  setFontSize: (size: number) => void;
  toggleTextSpacing: () => void;
  toggleHighContrast: () => void;
  toggleHighlightLinks: () => void;
  togglePauseAnimations: () => void;
  toggleHideImages: () => void;
  toggleDyslexiaFont: () => void;
  toggleLargeCursor: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

interface AccessibilityProviderProps {
  children: ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [fontSize, setFontSize] = useState(16);
  const [textSpacing, setTextSpacing] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    document.body.classList.toggle('increased-spacing', textSpacing);
  }, [textSpacing]);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.body.classList.toggle('highlight-links', highlightLinks);
  }, [highlightLinks]);

  useEffect(() => {
    document.body.classList.toggle('pause-animations', pauseAnimations);
  }, [pauseAnimations]);

  useEffect(() => {
    document.body.classList.toggle('hide-images', hideImages);
  }, [hideImages]);

  useEffect(() => {
    document.body.classList.toggle('dyslexia-friendly', dyslexiaFont);
  }, [dyslexiaFont]);

  useEffect(() => {
    document.body.classList.toggle('large-cursor', largeCursor);
  }, [largeCursor]);

  const value = {
    fontSize,
    textSpacing,
    highContrast,
    highlightLinks,
    pauseAnimations,
    hideImages,
    dyslexiaFont,
    largeCursor,
    setFontSize: (size: number) => setFontSize(size),
    toggleTextSpacing: () => setTextSpacing(prev => !prev),
    toggleHighContrast: () => setHighContrast(prev => !prev),
    toggleHighlightLinks: () => setHighlightLinks(prev => !prev),
    togglePauseAnimations: () => setPauseAnimations(prev => !prev),
    toggleHideImages: () => setHideImages(prev => !prev),
    toggleDyslexiaFont: () => setDyslexiaFont(prev => !prev),
    toggleLargeCursor: () => setLargeCursor(prev => !prev),
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}