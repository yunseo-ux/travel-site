# Design Tokens

이 문서는 `index.html`과 `css/main.css`에 구현된 Figma 디자인 값을 기준으로 작성한다. 신규 UI는 아래 토큰을 우선 사용하고, 예외적인 수치는 해당 컴포넌트 범위 안에서만 사용한다.

## 1. 기본 원칙

- 기본 폰트는 `Pretendard`, 대체 폰트는 `sans-serif`를 사용한다.
- 영문 장식 타이포 `BICYCLE TRAVEL`에는 `Leelawadee`를 사용한다.
- 모든 요소는 `box-sizing: border-box`를 기준으로 계산한다.
- 공통 색상과 레이아웃 값은 `:root` CSS 변수로 관리한다.
- Figma의 임시 자산 URL은 사용하지 않고 `images/`에 저장한 로컬 파일을 사용한다.

## 2. Color

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--color-black` | `#000000` | 제목, 기본 검정 배경 |
| `--color-white` | `#FFFFFF` | 흰 배경, 반전 텍스트 |
| `--color-text` | `#333333` | 기본 본문 |
| `--color-primary` | `#00A1E9` | 주요 버튼, 링크, 강조 |
| `--color-sky` | `#30BFFF` | welcome 태그 |
| `--color-orange` | `#F39800` | 해외 태그, TOP 버튼 |
| `--color-pink` | `#FF5F6D` | bicycle 태그, 가격 강조 |
| `--color-yellow` | `#FAD414` | 버튼 호버, 경남 태그 |
| `--color-green` | `#8FC31F` | happy 태그, 충청 태그 |
| `--color-review-bg` | `#F3FBFF` | con4 배경 |
| `--color-hero-fallback` | `#7290A6` | hero 이미지 로딩 전 배경 |
| `--color-muted` | `#999999` | 보조 가격 및 비활성 정보 |

### 투명 색상

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--color-white-80` | `rgba(255, 255, 255, 0.8)` | 밝은 배경 위 보조 텍스트 |
| `--color-white-70` | `rgba(255, 255, 255, 0.7)` | 푸터 보조 정보 |
| `--color-white-60` | `rgba(255, 255, 255, 0.6)` | 푸터 비강조 링크 |
| `--color-white-30` | `rgba(255, 255, 255, 0.3)` | 비활성 hero 인디케이터 |
| `--color-black-80` | `rgba(0, 0, 0, 0.8)` | 카드 작성자 |
| `--color-black-60` | `rgba(0, 0, 0, 0.6)` | 보조 본문 |
| `--color-overlay` | `rgba(0, 0, 0, 0.3)` | 리뷰 카드 호버 오버레이 |

### 권장 CSS 변수

```css
:root {
    --color-black: #000;
    --color-white: #fff;
    --color-text: #333;
    --color-primary: #00a1e9;
    --color-sky: #30bfff;
    --color-orange: #f39800;
    --color-pink: #ff5f6d;
    --color-yellow: #fad414;
    --color-green: #8fc31f;
    --color-review-bg: #f3fbff;
    --color-muted: #999;
}
```

## 3. Typography

### 글꼴

| 토큰 | 값 |
| --- | --- |
| `--font-primary` | `'Pretendard', sans-serif` |
| `--font-display` | `'Leelawadee', Arial, sans-serif` |

### 주요 스타일

| 스타일 | 크기 / 굵기 | 행간 | 자간 | 사용처 |
| --- | --- | --- | --- | --- |
| Hero title | `80px / 700` | `1.3` | `-1.6px` | Hero 영문 제목 |
| Section title 1 | `60px / 800` | `1.5` | `-2.4px` | con2, con4 제목 |
| Section title 2 | `40px / 800` | `1.5` | `-1.6px` | 장식 태그, con3 제목 |
| Hero body | `30px / 700` | `1` | `-1.5px` | Hero 한글 설명 |
| Body 1 | `32px / 400` | `1.5` | `-1.28px` | con3 설명 |
| Body 2 | `23px / 500` | `1.5` | `-1.15px` | 카드 설명 |
| Body 3 | `22px / 500` | `1.5` | `-0.88px` | 섹션 설명, 태그 |
| Body 4 | `18px / 400~700` | `normal~1.6` | `-0.9px~0` | 보조 정보 |
| Button | `16px / 700` | `1.5` | `-0.48px` | view more, TOP |
| Display art | `200px / 700` | `1.3` | 기본값 | con5 장식 타이포 |

### 반응형 타이포

- Hero 제목: `clamp(56px, 6.6vw, 80px)` → 모바일 `clamp(38px, 10vw, 56px)`
- Hero 설명: `clamp(20px, 2.5vw, 30px)` → 모바일 `18px`
- 섹션 제목: 데스크톱 `60px`, 모바일 `44px`
- 카드 본문: 데스크톱 `23px`, 모바일 `20px`

## 4. Layout

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--content-width` | `1680px` | 데스크톱 내부 최대 너비 |
| `--header-side-padding` | `120px` | 데스크톱 헤더 좌우 여백 |
| Hero height | `848px` | Hero 고정 높이 |
| Header height | `80px` | 상단 헤더 |
| con1 height | `598px` | BICYCLE TRAVEL 아트워크 |
| con2 height | `1798px` | 여행 및 행사 목록 |
| con3 height | `600px` | 브랜드 비주얼 |
| con4 height | `1017px` | 리뷰 영역 |
| con5 height | `505px` | 반복 타이포 아트워크 |
| Footer height | `431px` | 데스크톱 푸터 |

### Breakpoints

| 구간 | 기준 |
| --- | --- |
| Wide | `1600px 이하` |
| Tablet | `1200px 이하` |
| Mobile | `900px 이하` |
| Small mobile | `600px 이하` |

## 5. Spacing

기본 간격은 아래 값을 우선 사용한다.

| 토큰 | 값 | 대표 사용처 |
| --- | --- | --- |
| `--space-1` | `2px` | 버튼 아이콘과 텍스트 |
| `--space-2` | `6px` | Hero 인디케이터 |
| `--space-3` | `10px` | 작은 내부 간격 |
| `--space-4` | `15px` | Hero 카피 |
| `--space-5` | `20px` | 제목과 설명 |
| `--space-6` | `24px` | 본문 그룹 |
| `--space-7` | `30px` | 링크 그룹 |
| `--space-8` | `33px` | 상품 영역 |
| `--space-9` | `50px` | Hero 콘텐츠 |
| `--space-10` | `54px` | 리뷰 카드 세로 간격 |
| `--space-11` | `64px` | con4 소개 콘텐츠 |

## 6. Radius

| 토큰 | 값 | 사용처 |
| --- | --- | --- |
| `--radius-sm` | `4px` | 작은 포커스 요소 |
| `--radius-md` | `10px` | 상품 카드 |
| `--radius-card` | `20px` | 리뷰 카드 |
| `--radius-pill` | `40px` | 버튼 |
| `--radius-round` | `999px` | 태그 |
| `--radius-review-bottom` | `0 0 13.881px 13.881px` | 리뷰 텍스트 패널 |

## 7. Shadow

| 토큰 | 값 | 사용처 |
| --- | --- | --- |
| `--shadow-category` | `0 4px 4px rgba(0, 0, 0, 0.05)` | 카테고리 영역 |
| `--shadow-tag` | `0 4.68px 0 rgba(145, 145, 145, 0.5)` | bicycle 태그 |
| `--shadow-review` | `3px 8px 10px rgba(0, 0, 0, 0.1)` | 리뷰 카드 `drop-shadow` |

## 8. Motion

| 토큰 | 값 | 사용처 |
| --- | --- | --- |
| `--duration-fast` | `0.2s` | 버튼·카드 호버 |
| Hero slide speed | `700ms` | Swiper 전환 |
| Hero autoplay delay | `4000ms` | Hero 자동 롤링 |
| con4 manual pause | `3000ms` | 수동 스크롤 후 자동 재개 |
| con4 edge pause | `1000ms` | 자동 스크롤 방향 전환 대기 |

기본 easing은 `ease`를 사용한다. Hero는 Swiper 기본 easing을 따른다.

## 9. Component Tokens

### View more button

- 기본 높이: `50px`
- con3 너비: `200.417px`
- con4 너비: `182px`
- 반경: `40px`
- 아이콘: `20 × 11px`
- con4 기본 배경: `#00A1E9`
- con4 호버 배경: `#FAD414`
- con4 호버 글자: `#000000`

### Product card

- 이미지: `334.762 × 334.762px`
- 반경: `10px`
- 지역 태그: `83.397 × 41.111px`
- 지역 태그 반경: `999px`

### Review card

- 크기: `469.164 × 588.234px`
- 반경: `20px`
- 텍스트 영역 최소 높이: `160.86px`
- 내부 여백: `23.49px`
- 본문과 작성자 간격: `13.881px`
- 호버 오버레이: `rgba(0, 0, 0, 0.3)`
- 호버 텍스트 배경: `#00A1E9`

### TOP button

- 크기: `80 × 80px`
- 배경: `#F39800`
- 화면 고정 위치: 오른쪽 `19px`, 하단 `59px`
- 아이콘: `13 × 22px`

## 10. Accessibility

- 아이콘 전용 버튼에는 `aria-label`을 제공한다.
- 콘텐츠 이미지에는 장면을 설명하는 `alt`를 작성한다.
- 장식 이미지는 빈 `alt=""`를 사용한다.
- 키보드 포커스에는 최소 `2px` outline을 제공한다.
- 링크 목적지가 정해지지 않은 `href="#"`는 기본 상단 이동을 막는다.
- 본문 바로가기 링크의 `href`와 본문 `id`를 일치시킨다.
