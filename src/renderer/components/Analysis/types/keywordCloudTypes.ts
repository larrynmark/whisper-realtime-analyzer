/**
 * D3.js 키워드 클라우드 타입 정의
 */
export interface KeywordCloudWord {
  word: string;
  frequency: number;
  importance: number;
  category?: string;
  size?: number;
  x?: number;
  y?: number;
  color?: string;
  rotation?: number;
  fontSize?: number;
  fontWeight?: number;
  opacity?: number;
}

export interface KeywordCloudData {
  words: KeywordCloudWord[];
  maxFrequency: number;
  minFrequency: number;
  totalWords: number;
  categories: string[];
}

export interface KeywordCloudConfig {
  width: number;
  height: number;
  padding: number;
  minFontSize: number;
  maxFontSize: number;
  maxWords: number;
  fontFamily: string;
  enableRotation: boolean;
  rotationSteps: number[];
  enableAnimation: boolean;
  animationDuration: number;
  colors: {
    primary: string[];
    secondary: string[];
    accent: string[];
  };
}

export interface KeywordCloudState {
  isAnimating: boolean;
  hoveredWord: string | null;
  selectedWord: string | null;
  scale: number;
  centerX: number;
  centerY: number;
}

export interface KeywordCloudCallbacks {
  onWordClick?: (word: KeywordCloudWord) => void;
  onWordHover?: (word: KeywordCloudWord | null) => void;
  onAnimationComplete?: () => void;
  onError?: (error: Error) => void;
}

export interface KeywordCloudLayout {
  nodes: KeywordCloudWord[];
  bounds: {
    width: number;
    height: number;
    centerX: number;
    centerY: number;
  };
  collisions: number;
  iterations: number;
}

export interface KeywordCloudMetrics {
  renderTime: number;
  layoutTime: number;
  animationTime: number;
  memoryUsage: number;
  fps: number;
}