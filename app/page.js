"use client";

import { useMemo, useState } from "react";

const HANDS = {
  rock: {
    code: "R",
    number: "01",
    name: "ROCK",
    jp: "グー",
    point: 1,
  },
  scissors: {
    code: "S",
    number: "02",
    name: "SCISSORS",
    jp: "チョキ",
    point: 2,
  },
  paper: {
    code: "P",
    number: "05",
    name: "PAPER",
    jp: "パー",
    point: 5,
  },
};

const HAND_KEYS = [
  "rock",
  "scissors",
  "paper",
];

const BEATS = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

function randomHand() {
  return HAND_KEYS[
    Math.floor(
      Math.random() *
        HAND_KEYS.length
    )
  ];
}

/* =========================
   手の線画
========================= */

function HandDrawing({
  hand,
}) {
  if (hand === "rock") {
    return (
      <svg
        className="handSvg"
        viewBox="0 0 180 230"
        aria-hidden="true"
      >
        <path
          d="
            M55 199
            C48 180 42 160 41 140
            C40 125 43 113 49 106
            C54 100 61 98 68 102
            L68 75
            C68 64 73 57 81 57
            C89 57 94 63 94 74
            L94 96
            L97 61
            C98 50 104 44 112 45
            C120 46 124 52 123 63
            L120 97
            L125 68
            C127 58 133 53 141 55
            C149 57 152 64 150 74
            L144 109
            C153 104 161 107 165 114
            C170 124 164 137 157 148
            C150 160 143 171 139 185
            L136 205
          "
          fill="none"
        />

        <path
          d="
            M49 106
            C56 112 65 116 76 116
            C91 116 101 110 105 100
          "
          fill="none"
        />

        <path
          d="
            M68 102
            C71 112 77 119 87 122
          "
          fill="none"
        />

        <path
          d="
            M94 96
            C96 108 102 115 112 117
          "
          fill="none"
        />

        <path
          d="
            M120 97
            C120 107 126 113 137 115
          "
          fill="none"
        />

        <path
          d="
            M60 135
            C82 144 110 145 145 134
          "
          fill="none"
        />

        <path
          d="
            M69 153
            C88 160 108 160 129 154
          "
          fill="none"
        />
      </svg>
    );
  }

  if (hand === "scissors") {
    return (
      <svg
        className="handSvg"
        viewBox="0 0 180 230"
        aria-hidden="true"
      >
        <path
          d="
            M55 207
            C48 187 44 167 45 147
            C46 130 50 116 57 107
            L70 93
            L65 54
            C63 42 68 34 77 33
            C87 32 92 39 94 50
            L101 91
            L112 42
            C115 30 122 25 131 28
            C140 31 143 39 140 50
            L127 103
            L142 92
            C151 85 161 88 166 96
            C172 105 167 115 158 123
            L144 136
            C137 143 134 154 135 167
            L139 205
          "
          fill="none"
        />

        <path
          d="
            M70 93
            C76 102 86 108 99 108
            C111 108 121 105 127 103
          "
          fill="none"
        />

        <path
          d="
            M58 121
            C72 132 88 137 107 136
          "
          fill="none"
        />

        <path
          d="
            M63 148
            C83 157 104 159 127 153
          "
          fill="none"
        />

        <path
          d="
            M78 33
            C81 46 84 61 86 77
          "
          fill="none"
        />

        <path
          d="
            M131 28
            C128 43 124 58 121 73
          "
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg
      className="handSvg"
      viewBox="0 0 180 230"
      aria-hidden="true"
    >
      <path
        d="
          M55 208
          C49 189 45 169 45 149
          L45 82
          C45 70 51 63 60 63
          C69 63 74 70 74 81
          L74 106
          L74 49
          C74 37 80 30 89 30
          C98 30 103 37 103 49
          L103 101
          L105 43
          C105 31 111 25 120 26
          C129 27 134 34 133 46
          L130 104
          L134 58
          C135 47 141 41 149 43
          C158 45 161 52 160 63
          L155 124
          C154 141 149 153 140 164
          C134 172 132 184 134 207
        "
        fill="none"
      />

      <path
        d="
          M45 106
          C54 101 64 102 74 110
        "
        fill="none"
      />

      <path
        d="
          M74 106
          C83 112 92 113 103 108
        "
        fill="none"
      />

      <path
        d="
          M103 101
          C112 108 121 109 130 104
        "
        fill="none"
      />

      <path
        d="
          M130 104
          C140 110 148 111 156 107
        "
        fill="none"
      />

      <path
        d="
          M62 137
          C82 148 106 151 137 143
        "
        fill="none"
      />

      <path
        d="
          M67 159
          C86 168 106 170 126 164
        "
        fill="none"
      />
    </svg>
  );
}

/* =========================
   カード装飾
========================= */

function CardBack() {
  return (
    <div className="cardFace cardBack">
      <div className="backBorder">
        <span className="cornerOrnament tl">
          ❧
        </span>

        <span className="cornerOrnament tr">
          ❧
        </span>

        <span className="cornerOrnament bl">
          ❧
        </span>

        <span className="cornerOrnament br">
          ❧
        </span>

        <div className="backDiamond">
          <div className="backStar">
            ✦
          </div>
        </div>

        <span className="backTiny">
          FORTUNE
        </span>
      </div>
    </div>
  );
}

function CardFront({
  hand,
}) {
  if (!hand) {
    return (
      <div className="cardFace cardFront" />
    );
  }

  const info =
    HANDS[hand];

  return (
    <div className="cardFace cardFront">
      <div className="paperTexture" />

      <div className="frontFrame" />

      <div className="frontCorner top">
        <strong>
          {info.code}
        </strong>

        <span>
          {info.number}
        </span>
      </div>

      <div className="frontCorner bottom">
        <strong>
          {info.code}
        </strong>

        <span>
          {info.number}
        </span>
      </div>

      <div className="cardStar one">
        ✦
      </div>

      <div className="cardStar two">
        ✦
      </div>

      <div className="handCircle">
        <HandDrawing
          hand={hand}
        />
      </div>

      <div className="cardEnglish">
        {info.name}
      </div>
    </div>
  );
}

function PlayingCard({
  index,
  selected,
  revealed,
  hand,
  disabled,
  onClick,
}) {
  return (
    <button
      type="button"
      className={[
        "playingCard",
        selected
          ? "selected"
          : "",
        revealed
          ? "revealed"
          : "",
      ].join(" ")}
      disabled={disabled}
      onClick={onClick}
      aria-label={`カード${index + 1}`}
    >
      <div className="cardInner">
        <CardBack />

        <CardFront
          hand={hand}
        />
      </div>
    </button>
  );
}

/* =========================
   敵
========================= */

function EnemyPortrait() {
  return (
    <div className="portrait">
      <div className="portraitHalo">
        <span />
        <span />
        <span />
      </div>

      <div className="hood leftHood" />
      <div className="hood rightHood" />

      <div className="enemyMask">
        <div className="maskCrack c1" />
        <div className="maskCrack c2" />
        <div className="maskCrack c3" />

        <div className="eye eyeLeft" />
        <div className="eye eyeRight" />

        <div className="maskNose" />

        <div className="maskMark">
          ✦
        </div>
      </div>

      <div className="portraitLeaves leftLeaves">
        ❧
      </div>

      <div className="portraitLeaves rightLeaves">
        ❧
      </div>
    </div>
  );
}

/* =========================
   ゲーム
========================= */

export default function Home() {
  const [battle, setBattle] =
    useState(1);

  const [
    prediction,
    setPrediction,
  ] = useState(null);

  const [
    selectedCard,
    setSelectedCard,
  ] = useState(null);

  const [
    revealedCard,
    setRevealedCard,
  ] = useState(null);

  const [
    playerHand,
    setPlayerHand,
  ] = useState(null);

  const [
    enemyHand,
    setEnemyHand,
  ] = useState(null);

  const [
    result,
    setResult,
  ] = useState(null);

  const [
    predictionCorrect,
    setPredictionCorrect,
  ] = useState(null);

  const [
    collected,
    setCollected,
  ] = useState([]);

  const [
    animating,
    setAnimating,
  ] = useState(false);

  const setNumber =
    Math.ceil(
      battle / 3
    );

  const canReveal =
    prediction !== null &&
    selectedCard !== null &&
    !animating &&
    result === null;

  const winnerText =
    useMemo(() => {
      if (result === "win") {
        return "あなたの勝利";
      }

      if (result === "lose") {
        return "仮面の敵の勝利";
      }

      return "";
    }, [result]);

  function choosePrediction(
    value
  ) {
    if (
      animating ||
      result
    ) {
      return;
    }

    setPrediction(value);
  }

  function chooseCard(
    index
  ) {
    if (
      animating ||
      result
    ) {
      return;
    }

    setSelectedCard(index);
  }

  function reveal() {
    if (!canReveal) {
      return;
    }

    setAnimating(true);

    const mine =
      randomHand();

    const enemy =
      randomHand();

    setPlayerHand(mine);

    setEnemyHand(enemy);

    setRevealedCard(
      selectedCard
    );

    window.setTimeout(
      () => {
        if (
          mine === enemy
        ) {
          setResult(
            "draw"
          );

          setPredictionCorrect(
            null
          );

          setAnimating(
            false
          );

          return;
        }

        const actual =
          BEATS[mine] ===
          enemy
            ? "win"
            : "lose";

        setResult(actual);

        setPredictionCorrect(
          prediction ===
            actual
        );

        setCollected(
          (current) => [
            ...current,
            mine,
          ]
        );

        setAnimating(
          false
        );
      },
      760
    );
  }

  function resetRound({
    advance = false,
  } = {}) {
    if (advance) {
      setBattle(
        (current) =>
          current + 1
      );
    }

    setPrediction(null);

    setSelectedCard(
      null
    );

    setRevealedCard(
      null
    );

    setPlayerHand(
      null
    );

    setEnemyHand(
      null
    );

    setResult(null);

    setPredictionCorrect(
      null
    );

    setAnimating(false);
  }

  function nextBattle() {
    if (
      collected.length >=
      9
    ) {
      return;
    }

    resetRound({
      advance: true,
    });
  }

  return (
    <main className="game">
      <div className="pageFrame">
        <span className="frameCorner f1">
          ✦
        </span>

        <span className="frameCorner f2">
          ✦
        </span>

        <span className="frameCorner f3">
          ✦
        </span>

        <span className="frameCorner f4">
          ✦
        </span>
      </div>

      <header className="hero">
        <div className="heroBrand">
          <div className="brand">
            JANKEN
            <br />
            FRIENDS
          </div>

          <div className="tagline">
            じゃんけんは、
            出会いだ。
          </div>

          <div className="brandMini">
            A SMALL GAME
            <br />
            A BIG ENCOUNTER
          </div>
        </div>

        <EnemyPortrait />

        <div className="enemyInfo">
          <div className="enemyQuote">
            「選ぶのは君だ。
            <br />
            運命か、
            <br />
            それとも偶然か。」
          </div>

          <div className="enemyPlate">
            <span>
              No.01
            </span>

            <strong>
              ノクティス
            </strong>

            <small>
              Noctis
            </small>

            <div>
              星喰らいの仮面
            </div>
          </div>
        </div>
      </header>

      <section className="battleHeader">
        <div className="battlePill">
          SET {setNumber}
          {" / "}
          BATTLE {battle}
        </div>

        <div className="score">
          <span>
            SCORE
          </span>

          <strong>
            {
              collected.length
            }
          </strong>

          <small>
            / 9
          </small>
        </div>
      </section>

      <section className="instruction">
        <h1>
          カードを1枚選んで、
          同時に勝敗を予想しよう
        </h1>

        <p>
          ※ あいこの場合は再勝負
        </p>
      </section>

      <section className="prediction">
        <button
          type="button"
          className={[
            "predict",
            "win",
            prediction ===
            "win"
              ? "active"
              : "",
          ].join(" ")}
          onClick={() =>
            choosePrediction(
              "win"
            )
          }
        >
          <span className="predictIcon">
            ♛
          </span>

          <span>
            勝つ
          </span>
        </button>

        <button
          type="button"
          className={[
            "predict",
            "lose",
            prediction ===
            "lose"
              ? "active"
              : "",
          ].join(" ")}
          onClick={() =>
            choosePrediction(
              "lose"
            )
          }
        >
          <span className="predictIcon">
            ☠
          </span>

          <span>
            負ける
          </span>
        </button>
      </section>

      <section className="table">
        <div className="cardsArea">
          {[0, 1, 2].map(
            (index) => (
              <PlayingCard
                key={index}
                index={index}
                selected={
                  selectedCard ===
                  index
                }
                revealed={
                  revealedCard ===
                  index
                }
                hand={
                  revealedCard ===
                  index
                    ? playerHand
                    : null
                }
                disabled={
                  animating ||
                  result !==
                    null
                }
                onClick={() =>
                  chooseCard(
                    index
                  )
                }
              />
            )
          )}

          {result &&
            revealedCard !==
              null && (
              <div
                className={[
                  "cardVerdict",
                  result,
                  `card-${revealedCard}`,
                ].join(" ")}
              >
                <div className="verdictWord">
                  {result ===
                    "win" &&
                    "WIN"}

                  {result ===
                    "lose" &&
                    "LOSE"}

                  {result ===
                    "draw" &&
                    "DRAW"}
                </div>

                <div className="verdictRibbon">
                  {result ===
                  "draw" ? (
                    <>
                      あいこ
                      <span>
                        再勝負
                      </span>
                    </>
                  ) : (
                    <>
                      {predictionCorrect
                        ? "予言通り！"
                        : "予言失敗"}

                      <span>
                        {
                          HANDS[
                            playerHand
                          ].jp
                        }
                        {" / "}
                        {
                          HANDS[
                            playerHand
                          ].point
                        }
                        pt
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}
        </div>

        {!result && (
          <button
            type="button"
            className="revealButton"
            disabled={
              !canReveal
            }
            onClick={
              reveal
            }
          >
            選んだカードをめくる
          </button>
        )}
      </section>

      {result && (
        <section className="resultArea">
          <div className="versus">
            <span>
              あなた
            </span>

            <div className="smallHand">
              <HandDrawing
                hand={
                  playerHand
                }
              />
            </div>

            <b>
              VS
            </b>

            <div className="smallHand">
              <HandDrawing
                hand={
                  enemyHand
                }
              />
            </div>

            <span>
              仮面
            </span>
          </div>

          {result !==
            "draw" && (
            <div className="winnerText">
              {winnerText}
            </div>
          )}

          {result ===
            "draw" && (
            <button
              type="button"
              className="nextButton"
              onClick={() =>
                resetRound()
              }
            >
              再勝負する
              <span>
                ›
              </span>
            </button>
          )}

          {result !==
            "draw" &&
            collected.length <
              9 && (
              <button
                type="button"
                className="nextButton"
                onClick={
                  nextBattle
                }
              >
                次の勝負へ
                <span>
                  ›
                </span>
              </button>
            )}

          {result !==
            "draw" &&
            collected.length ===
              9 && (
              <button
                type="button"
                className="nextButton finalButton"
              >
                FINALへ
                <span>
                  ›
                </span>
              </button>
            )}
        </section>
      )}

      <section className="history">
        <div className="historyHeading">
          これまでに引いたカード
        </div>

        <div className="historyCards">
          {Array.from({
            length: 9,
          }).map(
            (_, index) => {
              const hand =
                collected[
                  index
                ];

              return (
                <div
                  className={[
                    "historyCard",
                    hand
                      ? "obtained"
                      : "",
                  ].join(" ")}
                  key={index}
                >
                  {hand ? (
                    <>
                      <span className="miniCode">
                        {
                          HANDS[
                            hand
                          ].code
                        }
                      </span>

                      <HandDrawing
                        hand={
                          hand
                        }
                      />
                    </>
                  ) : (
                    <>
                      <span className="historyNumber">
                        {index +
                          1}
                      </span>

                      <span className="miniStar">
                        ✦
                      </span>
                    </>
                  )}
                </div>
              );
            }
          )}
        </div>
      </section>

      <footer>
        <span />
        JANKEN FRIENDS
        <span />
      </footer>
    </main>
  );
}
