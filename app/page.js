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
   手の線画
========================================= */

function RockHand() {
  return (
    <svg
      viewBox="0 0 220 300"
      className="hand-art"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M78 268 C72 239 67 217 66 194 C64 171 66 154 72 142" />
        <path d="M145 270 C144 245 146 224 151 204 C156 185 162 170 162 154" />

        <path d="M72 142 C61 131 57 118 61 106 C65 94 76 90 87 96" />
        <path d="M87 96 C78 82 82 67 93 61 C105 55 118 61 123 74" />
        <path d="M123 74 C126 60 138 53 149 58 C160 63 163 75 158 89" />
        <path d="M158 89 C170 86 181 94 182 106 C183 119 174 129 162 134" />

        <path d="M72 142 C78 131 88 125 101 126 C115 127 123 137 122 150" />
        <path d="M122 150 C124 137 134 128 147 129 C160 130 168 141 166 154" />

        <path d="M75 111 C88 108 101 113 107 123" />
        <path d="M94 78 C108 77 119 83 124 94" />
        <path d="M130 73 C142 75 151 83 153 95" />

        <path d="M82 145 C92 154 105 157 118 154" />
        <path d="M126 151 C137 157 149 158 159 153" />

        <path d="M79 167 C99 177 126 178 151 167" />
        <path d="M82 191 C101 200 124 201 145 193" />
        <path d="M86 218 C103 224 123 225 140 220" />

        <path d="M91 106 C94 112 95 118 94 124" />
        <path d="M112 82 C115 89 116 96 115 103" />
        <path d="M143 82 C145 88 145 95 143 101" />

        <path d="M90 159 C94 164 99 166 104 167" />
        <path d="M132 160 C137 164 143 165 148 164" />

        <path d="M91 186 C99 190 106 191 113 190" />
        <path d="M119 191 C127 192 134 190 140 186" />
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
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M79 270 C75 246 71 224 72 202 C73 180 78 163 86 151" />
        <path d="M149 270 C146 246 145 226 148 207 C151 190 157 174 166 160" />

        <path d="M88 151 C77 143 70 133 70 122 C70 110 78 101 90 100" />

        <path d="M90 100 L78 46 C75 31 81 20 93 18 C105 16 113 24 116 39 L124 94" />

        <path d="M124 94 L139 35 C143 20 153 14 165 18 C177 22 181 33 177 48 L158 115" />

        <path d="M158 115 C169 104 182 104 190 113 C198 122 196 134 186 143 L166 160" />

        <path d="M89 101 C97 113 108 120 122 122" />
        <path d="M122 122 C136 124 148 121 158 115" />

        <path d="M88 151 C102 159 117 161 132 157" />
        <path d="M132 157 C143 153 154 153 164 159" />

        <path d="M91 176 C108 184 128 185 147 179" />
        <path d="M91 201 C108 209 127 210 144 204" />
        <path d="M92 229 C108 234 125 235 140 231" />

        <path d="M85 51 C94 49 103 51 112 57" />
        <path d="M145 46 C154 48 163 52 171 59" />

        <path d="M89 73 C98 71 107 74 116 80" />
        <path d="M139 70 C148 72 157 77 165 84" />

        <path d="M99 129 C104 135 111 139 119 140" />
        <path d="M127 140 C135 140 142 137 148 132" />
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
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M76 272 C72 246 68 221 69 196 C70 173 75 155 80 140" />
        <path d="M151 272 C149 246 150 225 155 204 C160 184 166 166 169 145" />

        <path d="M80 140 L68 84 C65 70 70 60 81 58 C92 56 100 64 102 78 L106 111" />

        <path d="M106 111 L105 46 C105 31 112 22 124 22 C136 22 143 31 143 46 L143 108" />

        <path d="M143 108 L149 55 C151 41 159 34 170 35 C181 36 187 46 185 60 L178 120" />

        <path d="M178 120 L181 79 C182 66 189 59 199 61 C209 63 213 72 211 85 L204 139 C202 151 196 162 188 171" />

        <path d="M80 140 C69 130 63 119 64 108 C65 96 73 89 84 90 C94 91 101 100 106 111" />

        <path d="M82 147 C100 157 123 160 146 154" />
        <path d="M146 154 C160 151 174 156 188 171" />

        <path d="M84 174 C103 184 127 186 151 179" />
        <path d="M85 202 C104 211 126 212 147 205" />
        <path d="M88 231 C104 237 124 238 142 233" />

        <path d="M73 89 C82 87 92 90 100 97" />
        <path d="M109 60 C119 57 131 58 140 64" />
        <path d="M150 70 C160 68 170 71 180 78" />
        <path d="M183 94 C192 94 201 98 207 104" />

        <path d="M111 91 C120 88 131 89 140 94" />
        <path d="M150 100 C159 98 169 101 177 106" />

        <path d="M91 158 C97 164 105 168 113 169" />
        <path d="M122 170 C132 170 140 167 148 162" />

        <path d="M97 191 C104 195 112 197 119 197" />
        <path d="M126 197 C134 197 141 194 147 190" />
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
   カード
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
   仮面
========================================= */

function EnemyArt() {
  return (
    <div className="enemy-art">
      <div className="enemy-circle" />

      <div className="enemy-branches branch-a">❧</div>
      <div className="enemy-branches branch-b">❧</div>

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

/* =========================================
   GAME
========================================= */

export default function Home() {
  const [battle, setBattle] = useState(1);

  const [phase, setPhase] = useState("normal");

  const [prediction, setPrediction] = useState(null);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(null);

  const [playerHand, setPlayerHand] = useState(null);
  const [enemyHand, setEnemyHand] = useState(null);

  const [result, setResult] = useState(null);
  const [predictionHit, setPredictionHit] = useState(null);

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
    paper:
      paperCount * HANDS.paper.point,
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

      /*
        FINALでは履歴を増やさない。
        通常戦だけ最大9枚まで保存。
      */
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
    /*
      9枚になったら通常戦は絶対に進めない。
    */
    if (cards.length >= 9) {
      return;
    }

    setBattle((old) =>
      Math.min(old + 1, 9)
    );

    clearRound();
  }

  function retryDraw() {
    /*
      あいこは同じBATTLEのまま再勝負
    */
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
        <i className="frame-star fs-a">✦</i>
        <i className="frame-star fs-b">✦</i>
        <i className="frame-star fs-c">✦</i>
        <i className="frame-star fs-d">✦</i>
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

            <small>/ 9</small>
          </div>
        </header>

        {/* FINAL倍率 */}

        {phase === "final" && (
          <div className="final-values">
            <span>
              R ×{rockCount}
              {" "}
              = {finalValues.rock}
            </span>

            <span>
              S ×{scissorsCount}
              {" "}
              = {finalValues.scissors}
            </span>

            <span>
              P ×{paperCount}
              {" "}
              = {finalValues.paper}
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
              }).map((_, index) => {
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
                            HANDS[hand]
                              .code
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
              })}
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
