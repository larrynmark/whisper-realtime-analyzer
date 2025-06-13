// 공통 타입 정의
import { SettingsState } from '../renderer/stores/settingsStore';

export interface TranscriptionSegment {
  id: string;
  text: string;
  timestamp: number;
  startTime: number;
  endTime: number;
  confidence?: number;
}

export interface AudioStreamData {
  buffer: ArrayBuffer;
  timestamp: number;
  sampleRate: number;
}

export interface AnalysisResult {
  id: string;
  timestamp: number;
  keywords: string[];
  summary: string;
  topics: string[];
  sentiment?: 'positive' | 'negative' | 'neutral';
  intent?: string;
}

export interface AppSettings {
  openaiApiKey: string;
  openaiBaseUrl?: string;
  analysisInterval: number; // seconds
  whisperModel: 'tiny' | 'base' | 'small' | 'medium' | 'large';
  maxAnalysisHistory: number; // minutes
}

export interface SystemStatus {
  isRecording: boolean;
  isAnalyzing: boolean;
  lastSTTTime?: number;
  lastAnalysisTime?: number;
  error?: string;
}

export interface KeywordFrequency {
  word: string;
  count: number;
  weight: number;
}

export interface TopicChange {
  timestamp: number;
  previousTopic: string;
  currentTopic: string;
  confidence: number;
}

// 확장된 분석 관련 타입들
export type AnalysisStatus = 
  | 'idle'           
  | 'analyzing'      
  | 'completed'      
  | 'error'          
  | 'rate_limited';  

export type SchedulerStatus = 
  | 'stopped'      
  | 'running'      
  | 'paused'       
  | 'waiting'      
  | 'analyzing';

// IPC 통신 채널 정의
export const IPC_CHANNELS = {
  // Audio
  START_RECORDING: 'audio:start-recording',
  STOP_RECORDING: 'audio:stop-recording',
  AUDIO_DATA: 'audio:data',
  
  // STT
  STT_RESULT: 'stt:result',
  STT_ERROR: 'stt:error',
  
  // Analysis
  ANALYSIS_RESULT: 'analysis:result',
  ANALYSIS_ERROR: 'analysis:error',
  ANALYSIS_START_REALTIME: 'analysis:start-realtime',
  ANALYSIS_STOP_REALTIME: 'analysis:stop-realtime',
  
  // Settings
  GET_SETTINGS: 'settings:get',
  SET_SETTINGS: 'settings:set',
  SETTINGS_UPDATED: 'settings:updated',
  VALIDATE_OPENAI_KEY: 'settings:validate-openai-key',
  
  // System
  SYSTEM_STATUS: 'system:status',
  APP_READY: 'app:ready',
  
  // Window Control
  WINDOW_MINIMIZE: 'window:minimize',
  WINDOW_MAXIMIZE: 'window:maximize',
  WINDOW_CLOSE: 'window:close',
} as const;

export type IPCChannel = typeof IPC_CHANNELS[keyof typeof IPC_CHANNELS];

// 허용된 IPC 채널 목록 (보안용)
export const ALLOWED_IPC_CHANNELS = Object.values(IPC_CHANNELS);