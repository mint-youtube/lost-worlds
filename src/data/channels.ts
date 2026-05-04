/**
 * 13채널 메타 + 디자인 토큰. 블로그 카테고리/색상/링크에 사용.
 * 색상은 channels.theme_config DB 값과 정합 (영상 톤과 일치).
 */
export type ChannelTokens = {
  bg: string;
  fg: string;
  accent: string;
  accent2?: string;
  muted: string;
  isLight?: boolean;
};

export type Channel = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  emoji: string;
  tokens: ChannelTokens;
};

export const CHANNELS: Record<string, Channel> = {
  "interpol-tracker": {
    id: "interpol-tracker",
    name: "인터폴 추적",
    tagline: "국제 수배범의 도주와 추적, 그 결정적 순간",
    category: "범죄/실화",
    emoji: "🌍",
    tokens: { bg: "#0A1628", fg: "#F5F5F0", accent: "#D4A24C", accent2: "#C9A961", muted: "#8A8F98" },
  },
  "law-cheater": {
    id: "law-cheater",
    name: "사기꾼 열전",
    tagline: "역사를 뒤흔든 희대의 사기 사건",
    category: "범죄/실화",
    emoji: "🎭",
    tokens: { bg: "#1A0F0F", fg: "#FAF3E0", accent: "#E63946", accent2: "#FFC857", muted: "#9C7A75" },
  },
  "law-investigation": {
    id: "law-investigation",
    name: "세기의 수사",
    tagline: "미해결과 추리, 수사관의 마지막 단서",
    category: "범죄/실화",
    emoji: "🔍",
    tokens: { bg: "#0D0D14", fg: "#E8E8F0", accent: "#9B6BFF", accent2: "#C2A8FF", muted: "#7B7B8E" },
  },
  "law-proof": {
    id: "law-proof",
    name: "증거의 힘",
    tagline: "포렌식이 밝힌 결정적 증거",
    category: "범죄/실화",
    emoji: "🧪",
    tokens: { bg: "#020A0F", fg: "#E0FAFB", accent: "#00E5C7", accent2: "#7CFFCB", muted: "#5A7A82" },
  },
  "story-day-of-destiny": {
    id: "story-day-of-destiny",
    name: "운명의 하루",
    tagline: "한 사건이 인생을 바꾼 그날",
    category: "휴먼/드라마",
    emoji: "📖",
    tokens: { bg: "#1F1810", fg: "#FAF1E0", accent: "#E8A87C", accent2: "#F4D35E", muted: "#9C8B72" },
  },
  "story-scary": {
    id: "story-scary",
    name: "도시괴담",
    tagline: "한밤중에 일어난 미스터리 실화",
    category: "호러/미스터리",
    emoji: "👁️",
    tokens: { bg: "#0A0507", fg: "#F5E8DC", accent: "#8B0000", accent2: "#D9A441", muted: "#7C6B62" },
  },
  "history-mistery": {
    id: "history-mistery",
    name: "고대의 수수께끼",
    tagline: "사라진 문명, 풀리지 않은 질문",
    category: "역사",
    emoji: "🏛️",
    tokens: { bg: "#1C1410", fg: "#E8D9B5", accent: "#C9A227", accent2: "#E8D9B5", muted: "#8C7B5E" },
  },
  "law-psycho": {
    id: "law-psycho",
    name: "범죄의 심리",
    tagline: "사이코패스의 머릿속을 분석하다",
    category: "범죄/심리",
    emoji: "🧠",
    tokens: { bg: "#0D1419", fg: "#E0E8EC", accent: "#4A6B7C", accent2: "#5FB3C7", muted: "#7A8A92" },
  },
  "knowledge-psycho": {
    id: "knowledge-psycho",
    name: "마음서재",
    tagline: "삶을 위로하는 심리학 한 줄",
    category: "지식/심리",
    emoji: "📚",
    tokens: { bg: "#F5EFE3", fg: "#2B1E14", accent: "#C9A57B", accent2: "#E8B86D", muted: "#6E5A48", isLight: true },
  },
  "knowledge-economist": {
    id: "knowledge-economist",
    name: "하루 경제학",
    tagline: "10분이면 이해되는 경제 한 조각",
    category: "지식/경제",
    emoji: "📊",
    tokens: { bg: "#F4F7FB", fg: "#0F1A2B", accent: "#1E5AA8", accent2: "#F5A623", muted: "#5C6B82", isLight: true },
  },
  "knowledge-money": {
    id: "knowledge-money",
    name: "돈의 모든 것",
    tagline: "부자는 어떻게 만들어지는가",
    category: "지식/투자",
    emoji: "💰",
    tokens: { bg: "#0A1F18", fg: "#F2E8C9", accent: "#D4AF37", accent2: "#22C55E", muted: "#7E8A75" },
  },
  "knowledge-number": {
    id: "knowledge-number",
    name: "숫자의 비밀",
    tagline: "통계가 알려주는 세상의 진실",
    category: "지식/통계",
    emoji: "🔢",
    tokens: { bg: "#1A1B3A", fg: "#FFFFFF", accent: "#7B2CBF", accent2: "#06D6A0", muted: "#7A7C9E" },
  },
  "knowledge-business": {
    id: "knowledge-business",
    name: "비즈니스 열전",
    tagline: "기업과 창업가의 결정적 한 순간",
    category: "지식/비즈니스",
    emoji: "📈",
    tokens: { bg: "#0A0A0A", fg: "#FFFFFF", accent: "#FF6B1A", accent2: "#FFFFFF", muted: "#8A8A8A" },
  },
};

export const CHANNEL_IDS = Object.keys(CHANNELS) as Array<keyof typeof CHANNELS>;

export function getChannel(id: string): Channel | undefined {
  return CHANNELS[id];
}
