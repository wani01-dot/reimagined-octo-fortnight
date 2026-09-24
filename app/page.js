"use client";

import { useState } from "react";

const HANDS = {
  rock: {
    code: "R",
    no: "01",
    name: "ROCK",
    jp: "グー",
    point: 1,
    theme: "rock",
  },
  scissors: {
    code: "S",
    no: "02",
    name: "SCISSORS",
    jp: "チョキ",
    point: 2,
    theme: "scissors",
  },
  paper: {
    code: "P",
    no: "05",
    name: "PAPER",
    jp: "パー",
    point: 5,
    theme: "paper",
  },
};

const HAND_KEYS = ["rock", "scissors", "paper"];

const BEATS = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

function randomHand() {
  return HAND_KEYS[
    Math.floor(Math.random() * HAND_KEYS.length)
  ];
}

/* =========================================
   HAND ILLUSTRATIONS
   antique playing-card style
========================================= */

function RockHand() {
  return (
    <svg
      viewBox="0 0 220 300"
      className="hand-art"
      aria-hidden="true"
    >
      {/* silhouette */}
      <path
        d="
          M73 282
          C74 262 73 243 70 225
          C67 205 62 188 61 171
          C60 156 63 145 69 137

          C62 130 58 121 59 112
          C60 101 67 94 77 92
          C75 82 78 73 86 67
          C94 61 104 62 112 68
          C115 57 123 50 134 50
          C145 50 153 57 155 68
          C165 65 175 69 181 77
          C188 86 186 98 179 106

          C187 112 191 121 189 131
          C187 142 179 150 168 153

          C169 171 166 188 161 205
          C155 224 151 243 151 260
          L151 282
          Z
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* index curled finger */}
      <path
        d="
          M63 112
          C66 101 76 96 87 97
          C100 98 110 105 112 115
          C114 124 108 132 98 134
          C87 136 75 132 68 125
          C63 121 61 116 63 112
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.2"
      />

      {/* middle curled finger */}
      <path
        d="
          M78 91
          C78 79 86 71 97 70
          C109 69 118 77 119 88
          C120 99 113 107 102 109
          C90 110 81 103 78 91
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.2"
      />

      {/* ring curled finger */}
      <path
        d="
          M112 70
          C115 59 124 53 135 54
          C146 55 153 63 153 74
          C153 85 145 92 134 92
          C122 92 114 83 112 70
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.2"
      />

      {/* pinky */}
      <path
        d="
          M154 77
          C161 70 171 71 178 78
          C185 85 185 95 179 103
          C173 111 163 112 156 106
          C149 100 148 85 154 77
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.2"
      />

      {/* thumb */}
      <path
        d="
          M70 138
          C78 125 90 119 103 120
          C115 121 124 129 125 140
          C126 150 120 158 110 162
          C99 166 87 162 78 155
          C70 149 67 143 70 138
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.4"
      />

      {/* engraving */}
      <g
        fill="none"
        stroke="#171713"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      >
        <path d="M69 111 C78 106 91 107 101 113" />
        <path d="M83 87 C92 82 104 83 112 89" />
        <path d="M120 70 C129 66 141 68 148 75" />
        <path d="M159 86 C165 82 173 83 178 89" />

        <path d="M75 121 C83 118 92 119 99 124" />
        <path d="M88 97 C96 94 105 95 111 100" />
        <path d="M124 80 C132 77 141 79 147 84" />

        <path d="M78 137 C88 142 99 144 111 141" />
        <path d="M81 150 C91 156 102 157 113 153" />

        <path d="M73 169 C94 180 124 181 153 171" />
        <path d="M72 188 C94 199 125 201 155 191" />
        <path d="M75 209 C96 218 124 219 151 211" />
        <path d="M79 232 C99 239 123 240 146 233" />
        <path d="M83 255 C100 260 122 261 141 256" />

        <path d="M88 114 C91 119 91 125 89 130" />
        <path d="M101 82 C104 88 104 94 102 100" />
        <path d="M136 62 C139 68 139 75 137 81" />
        <path d="M169 78 C172 84 172 91 169 97" />

        <path d="M87 177 C94 181 101 183 108 183" />
        <path d="M116 184 C125 184 134 181 141 176" />

        <path d="M87 199 C94 204 102 206 110 206" />
        <path d="M119 206 C127 206 135 203 142 199" />

        <path d="M92 220 C98 224 105 226 112 226" />
        <path d="M120 226 C127 226 133 224 139 220" />
      </g>

      {/* nails / hatch */}
      <g
        fill="none"
        stroke="#171713"
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.62"
      >
        <path d="M73 104 C78 101 84 101 89 104" />
        <path d="M88 77 C94 74 100 75 105 78" />
        <path d="M126 59 C132 57 138 58 143 61" />
        <path d="M161 75 C166 73 171 75 175 78" />

        <path d="M82 187 l-7 5" />
        <path d="M88 191 l-7 6" />
        <path d="M144 187 l7 5" />
        <path d="M138 192 l7 6" />
      </g>
    </svg>
  );
}

function ScissorsHand() {
  return (
    <svg
      viewBox="0 0 220 300"
      className="hand-art"
      aria-hidden="true"
    >
      {/* palm + wrist */}
      <path
        d="
          M76 282
          C76 260 74 239 72 219
          C70 199 70 181 75 164
          C79 151 85 141 94 134

          C84 126 78 116 79 105
          C80 94 88 87 98 87

          L83 47
          C78 32 83 20 95 17
          C107 14 117 22 121 37
          L132 82

          L145 38
          C149 23 159 16 171 20
          C183 24 187 36 182 51
          L164 110

          C174 103 184 104 191 112
          C199 121 197 134 187 143
          L169 159

          C167 176 163 193 158 210
          C153 228 150 246 151 263
          L151 282
          Z
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* folded ring finger */}
      <path
        d="
          M96 132
          C88 125 84 116 86 107
          C88 98 96 93 105 95
          C114 97 120 104 119 113
          C118 123 110 131 96 132
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.1"
      />

      {/* folded pinky */}
      <path
        d="
          M120 130
          C116 120 118 111 125 105
          C133 99 143 101 149 108
          C155 116 153 126 146 132
          C138 138 128 137 120 130
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.1"
      />

      {/* thumb crossing */}
      <path
        d="
          M91 137
          C105 127 120 124 137 126
          C149 127 159 135 165 146
          C169 154 168 162 162 168
          C154 175 143 172 135 164
          C125 154 114 151 101 154
          C93 156 87 151 86 145
          C85 142 87 139 91 137
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.4"
      />

      {/* finger details */}
      <g
        fill="none"
        stroke="#171713"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      >
        <path d="M89 48 C97 44 108 45 116 50" />
        <path d="M91 67 C100 63 111 64 119 70" />
        <path d="M148 43 C157 40 169 43 177 49" />
        <path d="M143 65 C152 62 163 65 172 71" />

        <path d="M99 96 C105 101 109 108 109 115" />
        <path d="M128 108 C135 110 141 115 144 122" />

        <path d="M94 140 C107 143 120 148 130 157" />
        <path d="M108 135 C121 135 134 139 145 147" />

        <path d="M81 166 C100 177 128 179 157 169" />
        <path d="M78 188 C99 199 128 201 154 191" />
        <path d="M79 211 C100 220 126 221 151 213" />
        <path d="M82 236 C101 242 124 243 146 237" />
        <path d="M86 259 C102 263 122 264 141 260" />

        <path d="M96 37 C100 43 101 50 100 56" />
        <path d="M164 31 C168 37 168 44 166 50" />

        <path d="M89 180 C96 185 103 187 111 187" />
        <path d="M119 188 C128 188 136 185 143 180" />

        <path d="M91 202 C99 207 106 209 114 209" />
        <path d="M122 209 C130 209 137 206 143 202" />

        <path d="M94 225 C101 229 108 231 115 231" />
        <path d="M122 231 C129 231 135 229 141 225" />
      </g>

      {/* nails */}
      <g
        fill="none"
        stroke="#171713"
        strokeWidth="0.95"
        opacity="0.64"
      >
        <path d="M88 34 C94 29 103 29 109 34 C111 40 110 46 106 50" />
        <path d="M153 35 C158 29 168 29 174 35 C176 41 175 47 171 52" />

        <path d="M85 188 l-7 5" />
        <path d="M91 192 l-7 6" />
        <path d="M145 188 l7 5" />
      </g>
    </svg>
  );
}

function PaperHand() {
  return (
    <svg
      viewBox="0 0 220 300"
      className="hand-art"
      aria-hidden="true"
    >
      {/* full open hand */}
      <path
        d="
          M75 282
          C75 261 73 241 70 221
          C67 202 63 184 61 166

          C59 151 61 139 66 129

          L55 95
          C51 82 56 72 67 69
          C78 66 87 73 91 86
          L98 109

          L91 54
          C89 39 96 29 108 27
          C120 25 129 34 130 49
          L133 105

          L137 39
          C138 24 146 15 158 16
          C170 17 177 27 176 42
          L171 110

          L181 58
          C184 44 193 37 204 40
          C215 43 220 54 216 68
          L204 127

          C201 143 195 158 186 171
          C177 184 168 196 163 211
          C157 229 153 247 153 264
          L153 282
          Z
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* thumb */}
      <path
        d="
          M66 129
          C57 120 49 110 47 100
          C45 90 50 82 59 80
          C69 78 78 85 84 96
          L99 124
          C104 134 102 145 94 151
          C85 157 74 151 66 129
          Z
        "
        fill="#eee5d2"
        stroke="#171713"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* palm engraving */}
      <g
        fill="none"
        stroke="#171713"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      >
        {/* finger joints */}
        <path d="M61 91 C69 87 79 89 87 95" />
        <path d="M65 108 C73 104 83 106 91 112" />

        <path d="M95 59 C104 55 117 56 126 62" />
        <path d="M97 80 C106 76 119 77 129 83" />

        <path d="M141 48 C150 44 163 46 172 52" />
        <path d="M139 72 C149 68 162 70 172 76" />

        <path d="M184 67 C192 64 203 67 210 73" />
        <path d="M180 90 C190 87 200 90 207 96" />

        {/* finger longitudinal detail */}
        <path d="M108 34 C112 42 113 51 112 60" />
        <path d="M157 23 C161 32 161 42 159 51" />
        <path d="M201 47 C204 55 204 64 201 72" />

        {/* palm lines */}
        <path d="M74 140 C94 151 120 155 147 149" />
        <path d="M80 158 C101 168 128 170 157 161" />

        <path d="M75 179 C96 190 126 192 158 181" />
        <path d="M74 201 C96 211 126 213 155 203" />
        <path d="M78 224 C98 232 124 234 150 226" />
        <path d="M82 247 C101 253 123 254 145 248" />

        {/* palm creases */}
        <path d="M86 132 C95 139 105 142 116 142" />
        <path d="M124 142 C136 142 146 138 154 131" />

        <path d="M88 174 C97 179 106 181 115 181" />
        <path d="M123 181 C133 181 142 178 150 173" />

        <path d="M89 195 C98 200 107 202 116 202" />
        <path d="M124 202 C133 202 141 199 148 195" />

        <path d="M92 217 C100 221 108 223 116 223" />
        <path d="M124 223 C132 223 139 221 145 217" />
      </g>

      {/* nails */}
      <g
        fill="none"
        stroke="#171713"
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.62"
      >
        <path d="M58 82 C64 77 73 78 79 83" />
        <path d="M98 39 C105 33 116 34 122 40" />
        <path d="M145 29 C152 23 164 24 170 31" />
        <path d="M190 51 C197 46 207 49 211 56" />

        <path d="M72 188 l-7 5" />
        <path d="M78 193 l-7 6" />
        <path d="M151 188 l8 5" />
        <path d="M145 193 l8 6" />
      </g>
    </svg>
  );
}

function HandArt({ hand }) {
  if (hand === "rock") return <RockHand />;
  if (hand === "scissors") return <ScissorsHand />;
  return <PaperHand />;
}

/* =========================================
   CARD
========================================= */

function CardBack() {
  return (
    <div className="card-face card-back">
      <div className="back-outer">
        <div className="back-inner">
          <span className="back-flower flower-1">❧</span>
          <span className="back-flower flower-2">❧</span>
          <span className="back-flower flower-3">❧</span>
          <span className="back-flower flower-4">❧</span>

          <div className="back-diamond diamond-a" />
          <div className="back-diamond diamond-b" />

          <div className="back-star">
            <span className="star-v" />
            <span className="star-h" />
          </div>

          <div className="back-brand">
            JANKEN FRIENDS
          </div>
        </div>
      </div>
    </div>
  );
}

function CardFront({ hand }) {
  if (!hand) {
    return <div className="card-face card-front" />;
  }

  const info = HANDS[hand];

  return (
    <div className={`card-face card-front ${info.theme}`}>
      <div className="card-paper" />

      <div className="front-border border-1" />
      <div className="front-border border-2" />

      <div className="top-left-card">
        <strong>{info.code}</strong>
        <span>{info.no}</span>
      </div>

      <div className="top-brand">
        JANKEN
        <br />
        FRIENDS
      </div>

      <span className="spark spark-a">✦</span>
      <span className="spark spark-b">✦</span>

      <div className="color-disc" />

      <div className="main-hand">
        <HandArt hand={hand} />
      </div>

      <div className="side-word side-left">
        {info.name}
      </div>

      <div className="side-word side-right">
        {info.name}
      </div>

      <div className="bottom-card-name">
        {info.name}
      </div>

      <div className="point-rule">
        <span />
        ✦
        <span />
      </div>

      <div className="point-name">
        {info.point === 1 && "ONE POINT"}
        {info.point === 2 && "TWO POINTS"}
        {info.point === 5 && "FIVE POINTS"}
      </div>

      <div className="bottom-brand">
        JANKEN FRIENDS
        <br />
        PLAYING CARDS
      </div>

      <div className="bottom-right-card">
        <strong>{info.code}</strong>
        <span>{info.no}</span>
      </div>
    </div>
  );
}

function PlayingCard({
  index,
  selected,
  revealed,
  hand,
  locked,
  onSelect,
}) {
  return (
    <button
      type="button"
      className={[
        "playing-card",
        selected ? "is-selected" : "",
        revealed ? "is-revealed" : "",
      ].join(" ")}
      disabled={locked}
      onClick={() => onSelect(index)}
    >
      <div className="playing-card-inner">
        <CardBack />
        <CardFront hand={hand} />
      </div>
    </button>
  );
}

/* =========================================
   ENEMY
========================================= */

function EnemyArt() {
  return (
    <div className="enemy-art">
      <div className="enemy-circle" />

      <div className="enemy-branches branch-a">
        ❧
      </div>

      <div className="enemy-branches branch-b">
        ❧
      </div>

      <div className="enemy-cloak cloak-left" />
      <div className="enemy-cloak cloak-right" />

      <div className="enemy-mask">
        <span className="mask-line ml-1" />
        <span className="mask-line ml-2" />
        <span className="mask-line ml-3" />
        <span className="mask-line ml-4" />

        <div className="mask-eye left" />
        <div className="mask-eye right" />

        <div className="mask-star">✦</div>
      </div>

      <div className="enemy-leaf leaf-a">
        ❧
      </div>

      <div className="enemy-leaf leaf-b">
        ❧
      </div>

      <div className="enemy-leaf leaf-c">
        ❧
      </div>
    </div>
  );
}

/* =========================================
   GAME
========================================= */

export default function Home() {
  const [battle, setBattle] = useState(1);
  const [phase, setPhase] = useState("normal");

  const [prediction, setPrediction] =
    useState(null);

  const [selected, setSelected] =
    useState(null);

  const [revealed, setRevealed] =
    useState(null);

  const [playerHand, setPlayerHand] =
    useState(null);

  const [enemyHand, setEnemyHand] =
    useState(null);

  const [result, setResult] =
    useState(null);

  const [predictionHit, setPredictionHit] =
    useState(null);

  const [cards, setCards] =
    useState([]);

  const canReveal =
    selected !== null &&
    prediction !== null &&
    result === null;

  const rockCount =
    cards.filter(
      (card) => card === "rock"
    ).length;

  const scissorsCount =
    cards.filter(
      (card) => card === "scissors"
    ).length;

  const paperCount =
    cards.filter(
      (card) => card === "paper"
    ).length;

  const finalValues = {
    rock:
      rockCount *
      HANDS.rock.point,

    scissors:
      scissorsCount *
      HANDS.scissors.point,

    paper:
      paperCount *
      HANDS.paper.point,
  };

  function chooseCard(index) {
    if (result !== null) return;

    setSelected(index);
  }

  function revealCard() {
    if (!canReveal) return;

    const mine = randomHand();
    const enemy = randomHand();

    setPlayerHand(mine);
    setEnemyHand(enemy);
    setRevealed(selected);

    if (mine === enemy) {
      setTimeout(() => {
        setResult("draw");
        setPredictionHit(null);
      }, 650);

      return;
    }

    const actual =
      BEATS[mine] === enemy
        ? "win"
        : "lose";

    setTimeout(() => {
      setResult(actual);

      setPredictionHit(
        prediction === actual
      );

      if (phase === "normal") {
        setCards((old) => {
          if (old.length >= 9) {
            return old;
          }

          return [...old, mine];
        });
      }
    }, 650);
  }

  function clearRound() {
    setPrediction(null);
    setSelected(null);
    setRevealed(null);
    setPlayerHand(null);
    setEnemyHand(null);
    setResult(null);
    setPredictionHit(null);
  }

  function nextNormalBattle() {
    if (cards.length >= 9) {
      return;
    }

    setBattle((old) =>
      Math.min(old + 1, 9)
    );

    clearRound();
  }

  function retryDraw() {
    clearRound();
  }

  function startFinalBattle() {
    if (cards.length !== 9) return;

    setPhase("final");
    clearRound();
  }

  function restartGame() {
    setBattle(1);
    setPhase("normal");
    setCards([]);
    clearRound();
  }

  const resultLabel =
    result === "win"
      ? "WIN"
      : result === "lose"
      ? "LOSE"
      : "DRAW";

  const currentPoint =
    playerHand
      ? HANDS[playerHand].point
      : 0;

  const currentFinalValue =
    playerHand
      ? finalValues[playerHand]
      : 0;

  const isNinthResult =
    phase === "normal" &&
    result !== null &&
    result !== "draw" &&
    cards.length === 9;

  return (
    <main className="screen">
      <div className="screen-frame">
        <i className="frame-star fs-a">
          ✦
        </i>

        <i className="frame-star fs-b">
          ✦
        </i>

        <i className="frame-star fs-c">
          ✦
        </i>

        <i className="frame-star fs-d">
          ✦
        </i>
      </div>

      {/* HEADER */}

      <section className="top-panel">
        <div className="title-block">
          <h1>
            JANKEN
            <br />
            FRIENDS
          </h1>

          <p>
            じゃんけんは、出会いだ。
          </p>

          <div className="tiny-copy">
            A
            <br />
            SMALL
            <br />
            GAME
            <br />
            A
            <br />
            BIG
            <br />
            ENCOUNTER
          </div>

          <div className="compass">
            <span />
            <b>✦</b>
          </div>
        </div>

        <EnemyArt />

        <div className="enemy-copy">
          <blockquote>
            「選ぶのは君だ。
            <br />
            運命か、
            <br />
            それとも偶然か。」
          </blockquote>

          <div className="enemy-name-card">
            <small>No.01</small>

            <strong>
              ノクティス
            </strong>

            <em>Noctis</em>

            <span>
              星喰らいの仮面
            </span>
          </div>
        </div>
      </section>

      {/* BATTLE */}

      <section className="battle-panel">
        <header className="battle-meta">
          <div className="battle-number">
            {phase === "final"
              ? "FINAL BATTLE"
              : `SET ${Math.ceil(
                  battle / 3
                )} / BATTLE ${battle}`}
          </div>

          <div className="score-box">
            <span>
              {phase === "final"
                ? "CARDS"
                : "SCORE"}
            </span>

            <strong>
              {cards.length}
            </strong>

            <small>
              / 9
            </small>
          </div>
        </header>

        {phase === "final" && (
          <div className="final-values">
            <span>
              R ×{rockCount} ={" "}
              {finalValues.rock}
            </span>

            <span>
              S ×{scissorsCount} ={" "}
              {finalValues.scissors}
            </span>

            <span>
              P ×{paperCount} ={" "}
              {finalValues.paper}
            </span>
          </div>
        )}

        <div className="instruction">
          <h2>
            {phase === "final"
              ? "最後のカードを選んで、勝敗を予想しよう"
              : "カードを1枚選んで、同時に勝敗を予想しよう"}
          </h2>

          <p>
            ※ あいこの場合は再勝負
          </p>
        </div>

        <div className="prediction-row">
          <button
            className={`prediction-button win ${
              prediction === "win"
                ? "active"
                : ""
            }`}
            onClick={() => {
              if (!result) {
                setPrediction("win");
              }
            }}
          >
            <span>♛</span>
            勝つ
          </button>

          <button
            className={`prediction-button lose ${
              prediction === "lose"
                ? "active"
                : ""
            }`}
            onClick={() => {
              if (!result) {
                setPrediction("lose");
              }
            }}
          >
            <span>☠</span>
            負ける
          </button>
        </div>

        <div className="card-stage">
          <div className="main-cards">
            {[0, 1, 2].map(
              (index) => (
                <PlayingCard
                  key={index}
                  index={index}
                  selected={
                    selected === index
                  }
                  revealed={
                    revealed === index
                  }
                  hand={
                    revealed === index
                      ? playerHand
                      : null
                  }
                  locked={
                    result !== null
                  }
                  onSelect={
                    chooseCard
                  }
                />
              )
            )}

            {result &&
              revealed !== null && (
                <div
                  className={[
                    "result-overlay",
                    `position-${revealed}`,
                    result,
                  ].join(" ")}
                >
                  <div className="result-word">
                    <span className="result-star left">
                      ✦
                    </span>

                    {resultLabel}

                    <span className="result-star right">
                      ✦
                    </span>
                  </div>

                  <div className="prediction-result">
                    {result ===
                    "draw" ? (
                      <>
                        <strong>
                          あいこ
                        </strong>

                        <span>
                          再勝負
                        </span>
                      </>
                    ) : (
                      <>
                        <strong>
                          {predictionHit
                            ? "予言通り！"
                            : "予言失敗"}
                        </strong>

                        <span>
                          {phase ===
                          "final"
                            ? `×${currentFinalValue}`
                            : `${
                                predictionHit
                                  ? "+"
                                  : ""
                              }${
                                predictionHit
                                  ? currentPoint
                                  : 0
                              }pt`}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )}
          </div>

          {!result && (
            <button
              className="flip-button"
              disabled={!canReveal}
              onClick={revealCard}
            >
              {phase === "final"
                ? "FINAL CARDをめくる"
                : "選んだカードをめくる"}
            </button>
          )}
        </div>

        {result && (
          <div className="after-result">
            {result === "draw" ? (
              <button
                className="next-button"
                onClick={retryDraw}
              >
                再勝負する
                <span>▶</span>
              </button>
            ) : phase === "final" ? (
              <button
                className="next-button"
                onClick={restartGame}
              >
                もう一度遊ぶ
                <span>▶</span>
              </button>
            ) : isNinthResult ? (
              <button
                className="next-button final-button"
                onClick={
                  startFinalBattle
                }
              >
                FINAL BATTLEへ
                <span>▶</span>
              </button>
            ) : (
              <button
                className="next-button"
                onClick={
                  nextNormalBattle
                }
              >
                次の勝負へ
                <span>▶</span>
              </button>
            )}
          </div>
        )}

        {/* HISTORY */}

        <section className="history-panel">
          <h3>
            これまでに引いたカード
          </h3>

          <div className="history-layout">
            <div className="history-cards">
              {Array.from({
                length: 9,
              }).map(
                (_, index) => {
                  const hand =
                    cards[index];

                  return (
                    <div
                      className={`history-card ${
                        hand
                          ? `filled ${hand}`
                          : ""
                      }`}
                      key={index}
                    >
                      {hand ? (
                        <>
                          <span className="history-code">
                            {
                              HANDS[
                                hand
                              ].code
                            }
                          </span>

                          <div className="history-disc" />

                          <HandArt
                            hand={hand}
                          />
                        </>
                      ) : (
                        <>
                          <span className="history-index">
                            {index + 1}
                          </span>

                          <span className="history-star">
                            ✦
                          </span>
                        </>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </section>

      <footer className="game-footer">
        <span />
        JANKEN FRIENDS
        <span />
      </footer>
    </main>
  );
}
