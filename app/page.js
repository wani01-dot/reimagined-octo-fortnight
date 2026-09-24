"use client";

import { useState } from "react";

const HANDS = {
  rock: {
    code: "R",
    no: "01",
    name: "ROCK",
    point: 1,
    theme: "rock",
  },
  scissors: {
    code: "S",
    no: "02",
    name: "SCISSORS",
    point: 2,
    theme: "scissors",
  },
  paper: {
    code: "P",
    no: "05",
    name: "PAPER",
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

/* =========================================================
   SIMPLE HAND ART
   今回はかなりシンプルな形に変更
========================================================= */

const HAND_SVG_SOURCE = {
  rock: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 420">
    <g fill="#f3ecdc" stroke="#171713" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <path d="
        M118 355
        L118 300
        C118 276 127 262 146 254
        C133 250 123 242 118 229
        C112 213 115 196 128 184
        C138 175 151 171 165 172
        C178 173 190 179 199 189
        C209 201 213 216 209 231
        C205 246 195 257 181 263
        C196 269 205 281 205 300
        L205 355
        Z
      " />
      <rect x="126" y="151" width="30" height="62" rx="15" ry="15" />
      <rect x="150" y="145" width="30" height="68" rx="15" ry="15" />
      <rect x="174" y="151" width="30" height="62" rx="15" ry="15" />
      <path d="
        M107 212
        C92 204 86 188 92 174
        C98 160 112 154 126 159
        C138 164 145 177 143 190
        C141 204 129 214 115 216
        Z
      " />
    </g>

    <g fill="none" stroke="#171713" stroke-width="2.2" stroke-linecap="round" opacity="0.85">
      <path d="M134 171 L134 203" />
      <path d="M159 166 L159 205" />
      <path d="M183 171 L183 203" />

      <path d="M126 270 C145 278 177 278 197 270" />
      <path d="M125 293 C146 301 178 301 198 293" />
      <path d="M126 317 C145 323 177 323 197 317" />
      <path d="M127 338 C145 343 177 343 196 338" />

      <path d="M106 180 C115 181 122 188 124 198" />
      <path d="M115 164 C123 168 129 175 131 184" />
    </g>
  </svg>
  `,

  scissors: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 420">
    <g fill="#f3ecdc" stroke="#171713" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <path d="
        M128 355
        L128 298
        C128 277 138 261 156 253
        C144 248 135 239 130 228
        C125 216 127 203 137 193
        C147 183 161 180 174 184
        C187 188 197 198 201 211
        C205 225 200 239 190 249
        C206 257 215 273 215 298
        L215 355
        Z
      " />

      <rect x="128" y="72" width="28" height="136" rx="14" ry="14" transform="rotate(-10 142 140)" />
      <rect x="174" y="72" width="28" height="136" rx="14" ry="14" transform="rotate(10 188 140)" />

      <rect x="149" y="160" width="28" height="58" rx="14" ry="14" />
      <rect x="174" y="173" width="28" height="48" rx="14" ry="14" />

      <path d="
        M112 215
        C97 206 92 190 99 177
        C106 164 120 159 133 165
        C145 171 151 184 148 197
        C145 209 136 218 123 220
        Z
      " />
    </g>

    <g fill="none" stroke="#171713" stroke-width="2.2" stroke-linecap="round" opacity="0.85">
      <path d="M142 91 L142 196" />
      <path d="M188 90 L188 196" />

      <path d="M136 271 C155 278 188 278 208 271" />
      <path d="M136 295 C157 302 189 302 208 295" />
      <path d="M137 319 C156 325 188 325 208 319" />
      <path d="M138 340 C156 345 187 345 207 340" />

      <path d="M150 173 L150 205" />
      <path d="M176 184 L176 210" />
    </g>
  </svg>
  `,

  paper: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 420">
    <g fill="#f3ecdc" stroke="#171713" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="103" y="82" width="26" height="130" rx="13" ry="13" />
      <rect x="130" y="66" width="26" height="146" rx="13" ry="13" />
      <rect x="157" y="60" width="26" height="152" rx="13" ry="13" />
      <rect x="184" y="82" width="26" height="130" rx="13" ry="13" />

      <path d="
        M103 196
        C91 189 85 176 87 163
        C89 149 100 139 114 139
        C126 139 136 147 141 159
        L152 196
        Z
      " />

      <path d="
        M110 355
        L110 281
        C110 253 127 233 156 233
        C185 233 203 253 203 281
        L203 355
        Z
      " />
    </g>

    <g fill="none" stroke="#171713" stroke-width="2.2" stroke-linecap="round" opacity="0.85">
      <path d="M116 100 L116 199" />
      <path d="M143 84 L143 204" />
      <path d="M170 78 L170 206" />
      <path d="M197 100 L197 199" />

      <path d="M117 261 C136 268 177 268 196 261" />
      <path d="M117 287 C137 294 177 294 196 287" />
      <path d="M118 313 C138 319 176 319 195 313" />
      <path d="M119 337 C138 342 176 342 194 337" />

      <path d="M105 155 C115 157 123 166 126 177" />
      <path d="M111 142 C121 145 130 153 134 164" />
    </g>
  </svg>
  `,
};

const HAND_IMAGES = Object.fromEntries(
  Object.entries(HAND_SVG_SOURCE).map(
    ([key, value]) => [
      key,
      `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
        value
      )}`,
    ]
  )
);

function randomHand() {
  return HAND_KEYS[
    Math.floor(Math.random() * HAND_KEYS.length)
  ];
}

function HandArt({ hand }) {
  if (!hand) return null;

  return (
    <img
      className="hand-image"
      src={HAND_IMAGES[hand]}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}

/* =========================================================
   CARD BACK
========================================================= */

function CardBack() {
  return (
    <div className="card-face card-back">
      <div className="back-outer">
        <div className="back-inner">
          <span className="back-flower flower-1">
            ❧
          </span>
          <span className="back-flower flower-2">
            ❧
          </span>
          <span className="back-flower flower-3">
            ❧
          </span>
          <span className="back-flower flower-4">
            ❧
          </span>

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

/* =========================================================
   CARD FRONT
========================================================= */

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

/* =========================================================
   ENEMY
========================================================= */

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

      <div className="enemy-leaf leaf-a">❧</div>
      <div className="enemy-leaf leaf-b">❧</div>
      <div className="enemy-leaf leaf-c">❧</div>
    </div>
  );
}

/* =========================================================
   GAME
========================================================= */

export default function Home() {
  const [battle, setBattle] = useState(1);
  const [phase, setPhase] = useState("normal");

  const [prediction, setPrediction] = useState(null);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(null);

  const [playerHand, setPlayerHand] = useState(null);

  const [result, setResult] = useState(null);
  const [predictionHit, setPredictionHit] =
    useState(null);

  const [cards, setCards] = useState([]);

  const canReveal =
    selected !== null &&
    prediction !== null &&
    result === null;

  const rockCount = cards.filter(
    (card) => card === "rock"
  ).length;

  const scissorsCount = cards.filter(
    (card) => card === "scissors"
  ).length;

  const paperCount = cards.filter(
    (card) => card === "paper"
  ).length;

  const finalValues = {
    rock: rockCount * HANDS.rock.point,
    scissors:
      scissorsCount * HANDS.scissors.point,
    paper: paperCount * HANDS.paper.point,
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
    setRevealed(selected);

    if (mine === enemy) {
      setTimeout(() => {
        setResult("draw");
        setPredictionHit(null);
      }, 650);

      return;
    }

    const actual =
      BEATS[mine] === enemy ? "win" : "lose";

    setTimeout(() => {
      setResult(actual);

      setPredictionHit(prediction === actual);

      if (phase === "normal") {
        setCards((old) => {
          if (old.length >= 9) return old;
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
    setResult(null);
    setPredictionHit(null);
  }

  function nextNormalBattle() {
    if (cards.length >= 9) return;

    setBattle((old) => Math.min(old + 1, 9));
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

  const currentPoint = playerHand
    ? HANDS[playerHand].point
    : 0;

  const currentFinalValue = playerHand
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
        <i className="frame-star fs-a">✦</i>
        <i className="frame-star fs-b">✦</i>
        <i className="frame-star fs-c">✦</i>
        <i className="frame-star fs-d">✦</i>
      </div>

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
            <strong>ノクティス</strong>
            <em>Noctis</em>
            <span>星喰らいの仮面</span>
          </div>
        </div>
      </section>

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
            <strong>{cards.length}</strong>
            <small>/ 9</small>
          </div>
        </header>

        {phase === "final" && (
          <div className="final-values">
            <span>
              R ×{rockCount} = {finalValues.rock}
            </span>
            <span>
              S ×{scissorsCount} ={" "}
              {finalValues.scissors}
            </span>
            <span>
              P ×{paperCount} = {finalValues.paper}
            </span>
          </div>
        )}

        <div className="instruction">
          <h2>
            {phase === "final"
              ? "最後のカードを選んで、勝敗を予想しよう"
              : "カードを1枚選んで、同時に勝敗を予想しよう"}
          </h2>

          <p>※ あいこの場合は再勝負</p>
        </div>

        <div className="prediction-row">
          <button
            className={`prediction-button win ${
              prediction === "win" ? "active" : ""
            }`}
            onClick={() => {
              if (!result) setPrediction("win");
            }}
          >
            <span>♛</span>
            勝つ
          </button>

          <button
            className={`prediction-button lose ${
              prediction === "lose" ? "active" : ""
            }`}
            onClick={() => {
              if (!result) setPrediction("lose");
            }}
          >
            <span>☠</span>
            負ける
          </button>
        </div>

        <div className="card-stage">
          <div className="main-cards">
            {[0, 1, 2].map((index) => (
              <PlayingCard
                key={index}
                index={index}
                selected={selected === index}
                revealed={revealed === index}
                hand={
                  revealed === index ? playerHand : null
                }
                locked={result !== null}
                onSelect={chooseCard}
              />
            ))}

            {result && revealed !== null && (
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
                  {result === "draw" ? (
                    <>
                      <strong>あいこ</strong>
                      <span>再勝負</span>
                    </>
                  ) : (
                    <>
                      <strong>
                        {predictionHit
                          ? "予言通り！"
                          : "予言失敗"}
                      </strong>
                      <span>
                        {phase === "final"
                          ? `×${currentFinalValue}`
                          : `${
                              predictionHit ? "+" : ""
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
                onClick={startFinalBattle}
              >
                FINAL BATTLEへ
                <span>▶</span>
              </button>
            ) : (
              <button
                className="next-button"
                onClick={nextNormalBattle}
              >
                次の勝負へ
                <span>▶</span>
              </button>
            )}
          </div>
        )}

        <section className="history-panel">
          <h3>これまでに引いたカード</h3>

          <div className="history-layout">
            <div className="history-cards">
              {Array.from({ length: 9 }).map(
                (_, index) => {
                  const hand = cards[index];

                  return (
                    <div
                      className={`history-card ${
                        hand ? `filled ${hand}` : ""
                      }`}
                      key={index}
                    >
                      {hand ? (
                        <>
                          <span className="history-code">
                            {HANDS[hand].code}
                          </span>

                          <div className="history-disc" />

                          <HandArt hand={hand} />
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
