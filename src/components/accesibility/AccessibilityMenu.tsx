import React, { useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { motion, AnimatePresence } from 'framer-motion';
import { useAccessibility } from './AccessibilityContext';
import { 
  FaTextHeight, 
  FaTextWidth, 
  FaAdjust, 
  FaLink, 
  FaPause, 
  FaImage, 
  FaFont, 
  FaMousePointer 
} from 'react-icons/fa';

interface AccessibilityMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessibilityMenu({ isOpen, onClose }: AccessibilityMenuProps) {
  const {
    fontSize,
    setFontSize,
    toggleTextSpacing,
    toggleHighContrast,
    toggleHighlightLinks,
    togglePauseAnimations,
    toggleHideImages,
    toggleDyslexiaFont,
    toggleLargeCursor
  } = useAccessibility();

  useHotkeys('ctrl+u', (event) => {
    event.preventDefault();
    onClose();
  });

  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(Math.max(12, fontSize - 2));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Accessibility Options</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close accessibility menu"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FaTextHeight className="mr-2" />
                    Font Size (Current: {fontSize}px)
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={decreaseFontSize}
                      className="accessibility-btn"
                      aria-label="Decrease font size"
                    >
                      A-
                    </button>
                    <button
                      onClick={increaseFontSize}
                      className="accessibility-btn"
                      aria-label="Increase font size"
                    >
                      A+
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FaTextWidth className="mr-2" />
                    Text Spacing
                  </h3>
                  <button
                    onClick={toggleTextSpacing}
                    className="accessibility-btn w-full"
                  >
                    Toggle Text Spacing
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FaAdjust className="mr-2" />
                    Contrast
                  </h3>
                  <button
                    onClick={toggleHighContrast}
                    className="accessibility-btn w-full"
                  >
                    Toggle High Contrast
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FaLink className="mr-2" />
                    Link Highlighting
                  </h3>
                  <button
                    onClick={toggleHighlightLinks}
                    className="accessibility-btn w-full"
                  >
                    Toggle Link Highlight
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FaPause className="mr-2" />
                    Animations
                  </h3>
                  <button
                    onClick={togglePauseAnimations}
                    className="accessibility-btn w-full"
                  >
                    Pause Animations
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FaImage className="mr-2" />
                    Images
                  </h3>
                  <button
                    onClick={toggleHideImages}
                    className="accessibility-btn w-full"
                  >
                    Hide Images
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FaFont className="mr-2" />
                    Dyslexia Friendly
                  </h3>
                  <button
                    onClick={toggleDyslexiaFont}
                    className="accessibility-btn w-full"
                  >
                    Toggle Dyslexia Font
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FaMousePointer className="mr-2" />
                    Cursor
                  </h3>
                  <button
                    onClick={toggleLargeCursor}
                    className="accessibility-btn w-full"
                  >
                    Toggle Large Cursor
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Ctrl</kbd> + <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">U</kbd> to toggle this menu
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}