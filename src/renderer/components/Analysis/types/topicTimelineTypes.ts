/**
 * Recharts 기반 주제 변화 시각화 타입 정의
 */

export interface TopicChangePoint {
  timestamp: number;
  from: string;
  to: string;
  confidence: number;
  duration?: number;
  id: string;
  metadata?: {
    keywords?: string[];
    triggerText?: string;
    analysisId?: string;
  };
}

export interface TopicTrendData {
  timestamp: number;
  topic: string;
  confidence: number;
  duration: number;
  position: number; // Y축 위치 (여러 주제 동시 표시용)
  color: string;
  category?: string;
}

export interface TopicTimelineConfig {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  maxTopics: number;
  timeWindow: number; // 표시할 시간 범위 (milliseconds)
  enableZoom: boolean;
  enableBrush: boolean;
  enableTooltip: boolean;
  enableLegend: boolean;
  colors: {
    primary: string[];
    secondary: string[];
    accent: string[];
  };
  animation: {
    enabled: boolean;
    duration: number;
    easing: string;
  };
}

export interface TopicTimelineState {
  selectedTimeRange: [number, number] | null;
  hoveredTopic: string | null;
  selectedTopics: string[];
  zoomLevel: number;
  isPanning: boolean;
  isLoading: boolean;
}

export interface TopicDistribution {
  topic: string;
  count: number;
  totalDuration: number;
  averageConfidence: number;
  firstSeen: number;
  lastSeen: number;
  color: string;
}

export interface TopicTransition {
  from: string;
  to: string;
  count: number;
  averageInterval: number;
  averageConfidence: number;
  lastTransition: number;
}

export interface TopicTimelineMetrics {
  totalTopics: number;
  totalTransitions: number;
  averageTopicDuration: number;
  mostFrequentTopic: string;
  longestTopic: string;
  topicDiversity: number; // 주제 다양성 지수
  transitionRate: number; // 분당 주제 변화 횟수
}

export interface TopicTimelineCallbacks {
  onTopicClick?: (topic: string, data: TopicTrendData) => void;
  onTopicHover?: (topic: string | null, data?: TopicTrendData) => void;
  onTimeRangeSelect?: (range: [number, number]) => void;
  onZoomChange?: (level: number) => void;
  onTopicFilter?: (topics: string[]) => void;
  onError?: (error: Error) => void;
}

export interface TopicCluster {
  id: string;
  topics: string[];
  centerTopic: string;
  similarity: number;
  timeRange: [number, number];
  color: string;
}

export interface TopicTimelineFilters {
  topicFilter: string[];
  confidenceThreshold: number;
  timeRange: [number, number] | null;
  durationThreshold: number;
  showTransitions: boolean;
  groupSimilarTopics: boolean;
}

export interface TopicTimelineExportData {
  topics: TopicTrendData[];
  transitions: TopicTransition[];
  metrics: TopicTimelineMetrics;
  config: TopicTimelineConfig;
  timestamp: number;
}