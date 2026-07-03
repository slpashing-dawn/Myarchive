/* ============================================================
   실제 데이터는 이 파일에만 넣으시면 됩니다.
   css나 다른 js 파일은 건드리실 필요 없어요.

   태그(tags)는 여기 적은 그대로 필터 패널의 태그 목록에
   자동으로 나타납니다. 태그를 어디 따로 등록할 필요 없어요.

   [팬픽 FICS_CURATED]
     completed        : 완결 여부 (true/false)
     metricCurrent     : 현재까지의 챕터 수
     metricTotal       : 전체 챕터 수. 아직 모르면 null
     rating            : 1~5 (아직 안 매겼으면 0)
     link              : 원문 링크
     memo              : 자유 텍스트

   [TRPG TRPG_CURATED]
     completed        : 보유 여부 (true=보유중, false=위시)
     playerCount        : 자유 텍스트, 예: "3~4인"
     playtime          : 자유 텍스트, 예: "3~4시간" (라이터가 적어둔 추정 소요시간)
     spoiler           : "known"(알뇌: 내용을 이미 알고 있음) 또는 "blind"(몰뇌: 아직 모름)
     rating            : 1~5 (아직 안 매겼으면 0)
     link              : 원문/구매 링크
     memo              : 자유 텍스트
============================================================ */

const FICS_CURATED = [
  {
    title: "밤의 온실",
    category: "로맨스",
    rating: 5,
    metricCurrent: 24,
    metricTotal: 24,
    completed: true,
    tags: ["설아×리안", "재회", "힐링", "현대물"],
    link: "https://example.com/fic/1",
    memo: "재회물 중 최애. 3장 온실 장면에서 울었음. 재독 확정."
  },
  {
    title: "유리구두는 신지 않아",
    category: "판타지",
    rating: 4,
    metricCurrent: 8,
    metricTotal: null,
    completed: false,
    tags: ["노아×유진", "시대극", "짝사랑", "느린전개"],
    link: "https://example.com/fic/2",
    memo: "연재 속도 느린데 문체가 좋아서 기다리는 중."
  },
  {
    title: "우리 반 부회장",
    category: "학원물",
    rating: 4,
    metricCurrent: 32,
    metricTotal: 32,
    completed: true,
    tags: ["다온×시우", "학원물", "티키타카", "완결보장"],
    link: "https://example.com/fic/3",
    memo: "가볍게 읽기 좋음. 개그 코드 잘 맞았음."
  },
  {
    title: "겨울의 끝에서 만나요",
    category: "로맨스",
    rating: 5,
    metricCurrent: 41,
    metricTotal: 41,
    completed: true,
    tags: ["설아×리안", "오해", "재회", "새드엔딩주의"],
    link: "https://example.com/fic/4",
    memo: "결말 호불호 갈릴 듯. 나는 좋았음. 눈물주의."
  },
  {
    title: "아무도 모르게",
    category: "스릴러",
    rating: 3,
    metricCurrent: 15,
    metricTotal: 20,
    completed: false,
    tags: ["도경×하람", "현대물", "떡밥회수"],
    link: "https://example.com/fic/5",
    memo: "떡밥은 흥미로운데 전개가 조금 늘어짐."
  },
  {
    title: "여름, 파도, 너",
    category: "로맨스",
    rating: 4,
    metricCurrent: 12,
    metricTotal: 12,
    completed: true,
    tags: ["다온×시우", "힐링", "여행물"],
    link: "https://example.com/fic/6",
    memo: "짧고 상큼한 힐링물. 여름에 다시 읽기 좋음."
  },
  {
    title: "붉은 실",
    category: "판타지",
    rating: 5,
    metricCurrent: 55,
    metricTotal: 55,
    completed: true,
    tags: ["노아×유진", "시대극", "적대관계", "느린전개"],
    link: "https://example.com/fic/7",
    memo: "장편인데 지루한 구간이 없었음. 세계관 최고."
  },
  {
    title: "달의 뒷면",
    category: "판타지",
    rating: 4,
    metricCurrent: 19,
    metricTotal: null,
    completed: false,
    tags: ["설아×리안", "적대관계", "떡밥회수"],
    link: "https://example.com/fic/9",
    memo: "떡밥 쌓는 중. 완결까지 지켜볼 예정."
  },
  {
    title: "새벽의 항구",
    category: "드라마",
    rating: 5,
    metricCurrent: 33,
    metricTotal: 33,
    completed: true,
    tags: ["도경×하람", "재회", "새드엔딩주의", "여행물"],
    link: "https://example.com/fic/11",
    memo: "올해 읽은 것 중 최고. 문장 하나하나 다 좋았음."
  }

  // ↓ 이 아래에 계속 { ... }, 로 추가하시면 됩니다.
];

const TRPG_CURATED = [
  {
    title: "100시간 연대기",
    category: "CoC 7th",
    rating: 0,
    playerCount: "타이만",
    playtime: "",
    completed: true,
    spoiler: "blind",
    tags: ["타이만", "소관타"],
    link: "",
    memo: "낙원 구출 작전, 캘백시, 너백시"
  },
  {
    title: "이름하야 마왕과 용사가 세상을 구하는 일대기",
    category: "CoC 7th",
    rating: 0,
    playerCount: "타이만",
    playtime: "",
    completed: true,
    spoiler: "known",
    tags: ["타이만", "코미디", "판타지"],
    link: "",
    memo: "팀33 - 마용구 1, 2, 3"
  }
];
