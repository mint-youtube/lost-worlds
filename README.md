# 🗿 잃어버린 세계

> 사라진 고대 문명의 비밀

정글 유적 + 보물지도 + Indiana Jones 톤

## 🔗 링크

- **블로그**: https://lost-worlds.dailynote.blog
- **GitHub**: https://github.com/mint-youtube/lost-worlds

## 📚 콘텐츠

태그: `#고대문명`, `#잃어버린보물`, `#유적`, `#탐험`, `#미스터리`

## 🛠️ 기술 스택

- **프레임워크**: Astro 5.x
- **스타일링**: Tailwind CSS
- **콘텐츠**: Markdown (`src/content/posts/`)
- **호스팅**: Cloudflare Pages (자동 빌드 + 배포)
- **이미지 CDN**: Cloudflare R2

## 🚀 로컬 실행

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # dist/
```

## 📝 새 글 추가

```bash
src/content/posts/{YYYY-MM-DD}-{slug}.md
```

Frontmatter:
```yaml
---
title: "글 제목"
description: "메타 설명"
pubDate: 2026-01-01
tags: ["태그1", "태그2"]
youtubeUrl: ""  # 영상 업로드 후 자동 채워짐
heroImage: ""
draft: false
---
```

## 🤖 자동화

이 블로그는 [`mint-youtube/law-interpol`](https://github.com/mint-youtube/law-interpol) 파이프라인이 자동 관리합니다.

매일 영상 생성 후 자동으로:
1. 영상 내용 기반 블로그 글 생성 (Claude AI)
2. R2에 이미지 업로드
3. GitHub push → Cloudflare Pages 자동 배포

## 📄 License

이 저장소의 코드는 MIT License. 콘텐츠는 채널 운영자 소유.

---

*Last updated: 2026-05-17*
