# Whisper Realtime Analyzer

실시간 음성 분석 및 시각화 도구 - Whisper STT와 OpenAI를 활용한 대화 분석 시스템

## 🚀 주요 기능

### 📊 고급 시각화 컴포넌트
- **D3.js 키워드 클라우드**: 실시간 키워드 빈도 분석 및 동적 시각화
- **Recharts 주제 변화 타임라인**: 시간축 기반 주제 트렌드 분석
- **실시간 데이터 스트림**: 부드러운 애니메이션과 실시간 업데이트

### 🎙️ 음성 처리
- **Whisper STT**: OpenAI Whisper 모델을 활용한 정확한 음성 인식
- **실시간 처리**: 스트리밍 오디오 분석 및 세그먼테이션
- **다중 언어 지원**: 여러 언어의 음성 인식 가능

### 🧠 AI 분석
- **OpenAI GPT 통합**: 고도화된 텍스트 분석 및 주제 추출
- **감정 분석**: 대화의 감정 상태 실시간 모니터링
- **의도 분석**: 대화 의도 및 컨텍스트 파악

## 🏗️ 기술 스택

### Frontend
- **React 18** + **TypeScript** - 모던 UI 개발
- **Electron** - 크로스 플랫폼 데스크톱 앱
- **Material-UI (MUI)** - 일관된 디자인 시스템
- **D3.js** - 고급 데이터 시각화
- **Recharts** - React 기반 차트 라이브러리
- **Zustand** - 경량 상태 관리

### Backend & Processing
- **Node.js** - 서버사이드 처리
- **Python** - Whisper STT 모델 실행
- **OpenAI API** - GPT 기반 텍스트 분석
- **IPC Communication** - 프로세스 간 실시간 통신

## 📦 설치 및 실행

### 요구사항
- Node.js 16+
- Python 3.8+
- OpenAI API 키

### 설치
```bash
# 프로젝트 클론
git clone https://github.com/larrynmark/whisper-realtime-analyzer.git
cd whisper-realtime-analyzer

# 의존성 설치
npm install

# Python 의존성 설치
pip install -r requirements.txt
```

### 개발 모드 실행
```bash
# 개발 서버 시작
npm run dev

# 또는 별도 터미널에서
npm run dev:main    # 메인 프로세스
npm run dev:renderer # 렌더러 프로세스
```

### 프로덕션 빌드
```bash
# 빌드
npm run build

# 배포 패키지 생성
npm run dist
```

## 🎯 프로젝트 구조

```
src/
├── main/                     # Electron 메인 프로세스
│   ├── analysis/            # 분석 엔진
│   ├── audio/              # 오디오 캡처
│   ├── settings/           # 설정 관리
│   ├── whisper/            # STT 엔진
│   └── IPCHandler.ts       # IPC 통신 핸들러
├── renderer/               # React 렌더러 프로세스
│   ├── components/         # UI 컴포넌트
│   │   ├── Analysis/       # 분석 컴포넌트
│   │   │   ├── types/      # 타입 정의
│   │   │   ├── utils/      # 유틸리티
│   │   │   ├── hooks/      # 커스텀 훅
│   │   │   ├── KeywordCloud.tsx        # D3.js 키워드 클라우드
│   │   │   └── TopicTimelineCard.tsx   # Recharts 주제 타임라인
│   │   ├── Settings/       # 설정 UI
│   │   └── Layout/         # 레이아웃
│   ├── stores/             # Zustand 상태 관리
│   └── hooks/              # 글로벌 훅
└── shared/                 # 공통 타입 및 유틸리티
```

## 🎨 시각화 컴포넌트

### D3.js 키워드 클라우드
- **실시간 레이아웃**: Force 시뮬레이션 기반 충돌 방지
- **인터랙티브**: 클릭/호버 이벤트, 확대/축소
- **성능 최적화**: 메모리 관리, 60fps 애니메이션
- **테마 지원**: 다크/라이트 모드 자동 적용

### Recharts 주제 타임라인
- **시간축 분석**: 주제 변화 패턴 시각화
- **브러시 제어**: 시간 구간 선택 및 확대
- **다중 메트릭**: 신뢰도, 다양성 지수, 전환율
- **실시간 업데이트**: 큐 기반 데이터 스트리밍

## ⚙️ 설정

### OpenAI API 설정
1. OpenAI API 키 발급
2. 앱 내 설정 메뉴에서 API 키 입력
3. 모델 및 분석 옵션 구성

### Whisper 모델 설정
- **tiny**: 빠른 처리, 낮은 정확도
- **base**: 균형잡힌 성능
- **small**: 높은 정확도
- **medium**: 최고 품질 (권장)
- **large**: 최대 정확도, 높은 리소스 요구

## 🛠️ 개발 가이드

### 새로운 시각화 컴포넌트 추가
1. `src/renderer/components/Analysis/types/` - 타입 정의
2. `src/renderer/components/Analysis/utils/` - 데이터 처리 로직
3. `src/renderer/components/Analysis/hooks/` - React 훅
4. `src/renderer/components/Analysis/` - 메인 컴포넌트
5. `src/renderer/components/Analysis/index.ts` - Export 추가

### 성능 최적화 가이드
- React.memo, useMemo, useCallback 적극 활용
- 리사이즈 이벤트 디바운싱
- RAF 기반 애니메이션
- 메모리 누수 방지 cleanup

## 📈 로드맵

### ✅ 완료된 기능
- [x] D3.js 키워드 클라우드 (Task 1)
- [x] Recharts 주제 변화 타임라인 (Task 2)
- [x] 기본 설정 시스템 (1-6단계)
- [x] Electron 기반 데스크톱 앱

### 🚧 진행 중
- [ ] 실시간 텍스트 스트림 타임라인 (Task 3)
- [ ] 실시간 업데이트 로직 통합 (Task 4)

### 🎯 향후 계획
- [ ] 대화 요약 및 보고서 생성
- [ ] 다국어 UI 지원
- [ ] 클라우드 동기화
- [ ] 팀 협업 기능

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🔗 관련 링크

- [OpenAI Whisper](https://github.com/openai/whisper)
- [OpenAI API](https://platform.openai.com/)
- [Electron](https://www.electronjs.org/)
- [D3.js](https://d3js.org/)
- [Recharts](https://recharts.org/)

## 📞 지원

이슈가 있거나 질문이 있으시면 [GitHub Issues](https://github.com/larrynmark/whisper-realtime-analyzer/issues)에 등록해 주세요.
