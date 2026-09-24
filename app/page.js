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


/* =========================================================
   NEW HAND ART

   ここから方式変更。

   JSXのSVGコンポーネントではなく
   完全な1枚の画像として扱う。
========================================================= */

const HAND_SVG_SOURCE = {
  rock: `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 420"
  >
    <g
      fill="#f2ead8"
      stroke="#171713"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="rotate(-4 150 210)"
    >

      <!-- wrist and palm -->
      <path d="
        M116 397
        C116 373 113 350 108 328
        C103 306 96 286 92 264
        C88 242 89 224 96 208

        C82 199 75 187 76 173
        C77 159 86 148 101 145

        C91 136 88 123 92 111
        C96 98 108 90 122 92

        C119 78 126 66 139 61
        C152 56 166 62 172 75

        C180 65 195 63 206 71
        C218 79 220 94 214 107

        C225 106 237 114 240 127
        C243 140 236 152 224 158

        C230 176 227 195 216 210
        C205 225 191 236 181 252

        C169 272 165 293 166 319
        L169 397
        Z
      " />

      <!-- thumb crossing the fist -->
      <path d="
        M100 206
        C111 187 129 176 149 175
        C168 174 185 183 192 198

        C198 211 194 224 183 232

        C171 241 155 239 144 229
        C135 221 126 217 114 219

        C104 220 96 215 94 209
        C93 207 96 203 100 206
        Z
      " />

      <!-- index knuckle -->
      <path d="
        M79 171
        C79 155 91 145 107 145
        C124 145 136 155 137 170
        C138 185 128 196 112 198
        C96 200 82 190 79 171
      " />

      <!-- middle knuckle -->
      <path d="
        M94 116
        C98 101 112 92 128 94
        C144 96 154 108 152 123
        C150 138 137 147 122 145
        C106 143 96 132 94 116
      " />

      <!-- ring knuckle -->
      <path d="
        M126 81
        C131 66 146 59 161 63
        C176 67 184 80 180 94
        C176 108 162 116 148 112
        C133 108 124 96 126 81
      " />

      <!-- pinky knuckle -->
      <path d="
        M176 86
        C185 75 201 75 211 85
        C221 95 221 110 212 120
        C203 130 188 130 179 121
        C170 112 168 96 176 86
      " />

    </g>

    <!-- engraved linework -->
    <g
      fill="none"
      stroke="#171713"
      stroke-width="2.1"
      stroke-linecap="round"
      opacity="0.82"
      transform="rotate(-4 150 210)"
    >

      <path d="M86 163 C98 156 116 157 129 165" />
      <path d="M101 112 C114 105 133 107 145 117" />
      <path d="M136 78 C148 72 165 75 174 84" />
      <path d="M184 91 C194 86 205 90 211 99" />

      <path d="M107 191 C120 196 134 196 146 191" />
      <path d="M114 207 C128 213 143 214 157 209" />

      <path d="M100 245 C125 258 157 260 187 249" />
      <path d="M101 269 C127 280 158 282 185 272" />
      <path d="M105 296 C130 305 158 306 180 298" />
      <path d="M109 325 C131 332 156 333 176 327" />

      <path d="M110 153 C115 160 116 168 113 175" />
      <path d="M128 101 C133 108 134 116 132 123" />
      <path d="M160 70 C164 77 165 85 162 92" />
      <path d="M201 84 C205 91 205 100 202 107" />

      <path d="M118 254 C127 259 136 261 145 260" />
      <path d="M152 260 C162 260 171 257 179 252" />

      <path d="M121 279 C130 284 140 286 149 285" />
      <path d="M156 285 C165 285 173 282 180 278" />

    </g>
  </svg>
  `,

  scissors: `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 420"
  >

    <g
      fill="#f2ead8"
      stroke="#171713"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >

      <!-- wrist and palm -->
      <path d="
        M112 398
        C112 371 108 345 106 321
        C104 294 107 269 116 248

        C102 236 94 221 94 203
        C94 186 102 171 115 163

        L88 79
        C83 61 89 45 104 40
        C120 35 134 46 138 64
        L154 136

        L177 62
        C182 44 197 35 212 40
        C228 45 235 61 230 79
        L205 162

        C219 153 235 156 245 168
        C255 181 251 198 238 209
        L215 229

        C211 250 205 270 199 291
        C193 312 190 336 192 360
        L194 398
        Z
      " />

      <!-- folded ring finger -->
      <path d="
        M112 171
        C104 159 106 144 116 135
        C126 126 142 127 151 137
        C160 147 158 162 148 171
        C138 180 121 180 112 171
        Z
      " />

      <!-- folded pinky -->
      <path d="
        M149 175
        C145 161 151 148 163 142
        C175 136 189 141 195 153
        C201 165 197 179 185 186
        C172 193 156 188 149 175
        Z
      " />

      <!-- thumb laid across -->
      <path d="
        M104 213
        C125 194 151 187 176 192
        C197 196 211 208 216 223

        C220 235 214 246 203 251

        C190 257 179 249 169 241
        C156 229 143 226 128 232

        C116 236 105 231 101 223
        C99 219 100 216 104 213
        Z
      " />

    </g>


    <g
      fill="none"
      stroke="#171713"
      stroke-width="2.1"
      stroke-linecap="round"
      opacity="0.82"
    >

      <!-- long finger joints -->
      <path d="M96 78 C107 72 124 74 135 82" />
      <path d="M103 107 C116 101 131 103 143 112" />

      <path d="M186 70 C198 65 215 68 224 78" />
      <path d="M178 101 C190 96 207 99 217 109" />

      <!-- nails -->
      <path d="
        M98 53
        C106 46 121 47 129 55
        C132 64 131 72 126 78
      " />

      <path d="
        M193 54
        C201 47 215 49 222 58
        C224 66 223 74 218 80
      " />

      <!-- palm lines -->
      <path d="M112 250 C137 262 168 264 198 253" />
      <path d="M109 276 C134 287 165 290 194 280" />
      <path d="M109 303 C133 313 163 315 190 307" />
      <path d="M112 332 C134 340 161 341 186 334" />

      <path d="M119 215 C135 218 150 225 162 237" />
      <path d="M134 204 C151 204 168 209 181 219" />

      <path d="M121 260 C130 265 140 267 149 267" />
      <path d="M157 267 C167 267 176 264 184 259" />

      <path d="M123 286 C132 291 142 293 151 293" />
      <path d="M159 293 C169 293 177 290 184 286" />

    </g>

  </svg>
  `,

  paper: `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 420"
  >

    <g
      fill="#f2ead8"
      stroke="#171713"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >

      <!-- open hand silhouette -->
      <path d="
        M105 398
        C105 370 102 345 98 319
        C94 293 88 270 84 246

        L66 155
        C63 138 70 126 83 123
        C97 120 108 129 112 145
        L124 193

        L112 94
        C110 75 119 62 134 60
        C150 58 160 69 162 88
        L166 180

        L171 69
        C172 50 183 39 199 40
        C215 41 224 54 222 73
        L214 184

        L224 100
        C226 82 237 72 251 74
        C266 76 274 89 271 107
        L255 213

        C252 234 244 254 232 271
        C220 288 208 303 202 323
        C196 344 194 367 196 398
        Z
      " />

      <!-- thumb -->
      <path d="
        M86 232
        C69 218 56 200 53 182
        C50 166 58 153 71 150

        C85 147 98 157 106 174
        L127 220

        C134 235 130 250 119 257
        C106 265 95 254 86 232
        Z
      " />

    </g>


    <g
      fill="none"
      stroke="#171713"
      stroke-width="2.1"
      stroke-linecap="round"
      opacity="0.82"
    >

      <!-- nails -->
      <path d="
        M119 76
        C128 68 145 69 154 78
        C157 89 155 98 149 105
      " />

      <path d="
        M179 55
        C189 47 207 49 216 59
        C218 70 216 79 210 87
      " />

      <path d="
        M234 89
        C243 82 258 85 265 94
        C267 104 264 113 258 119
      " />

      <path d="
        M73 138
        C82 131 97 134 104 143
      " />

      <!-- finger joints -->
      <path d="M117 110 C128 104 146 106 157 114" />
      <path d="M120 142 C133 136 149 138 160 147" />

      <path d="M174 91 C187 85 205 87 216 97" />
      <path d="M172 124 C184 119 202 121 213 130" />

      <path d="M228 126 C239 121 254 124 263 133" />
      <path d="M222 157 C234 152 249 155 258 164" />

      <!-- palm -->
      <path d="M94 239 C121 255 157 259 194 250" />
      <path d="M96 268 C123 282 159 285 194 275" />
      <path d="M99 298 C126 311 159 313 190 304" />
      <path d="M103 329 C128 339 158 341 186 333" />

      <!-- life lines -->
      <path d="
        M115 221
        C128 235 145 241 164 241
      " />

      <path d="
        M172 240
        C187 239 200 233 211 223
      " />

      <path d="
        M119 262
        C131 269 144 272 157 271
      " />

      <path d="
        M165 271
        C179 271 191 267 201 260
      " />

      <path d="
        M122 289
        C134 296 146 298 158 297
      " />

      <path d="
        M166 297
        C178 297 188 294 197 289
      " />

    </g>

  </svg>
  `,
};


/*
  SVG文字列を
  完全な画像URLへ変換。

  これ以降カード側では
  SVGを直接描画しない。
*/

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
    Math.floor(
      Math.random() *
      HAND_KEYS.length
    )
  ];
}


/* =========================================================
   HAND IMAGE
========================================================= */

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
    return (
      <div className="card-face card-front" />
    );
  }

  const info = HANDS[hand];

  return (
    <div
      className={
        `card-face card-front ${info.theme}`
      }
    >

      <div className="card-paper" />

      <div className="front-border border-1" />
      <div className="front-border border-2" />

      <div className="top-left-card">
        <strong>
          {info.code}
        </strong>

        <span>
          {info.no}
        </span>
      </div>

      <div className="top-brand">
        JANKEN
        <br />
        FRIENDS
      </div>

      <span className="spark spark-a">
        ✦
      </span>

      <span className="spark spark-b">
        ✦
      </span>

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
        {info.point === 1 &&
          "ONE POINT"}

        {info.point === 2 &&
          "TWO POINTS"}

        {info.point === 5 &&
          "FIVE POINTS"}
      </div>

      <div className="bottom-brand">
        JANKEN FRIENDS
        <br />
        PLAYING CARDS
      </div>

      <div className="bottom-right-card">

        <strong>
          {info.code}
        </strong>

        <span>
          {info.no}
        </span>

      </div>

    </div>
  );
}


/* =========================================================
   PLAYING CARD
========================================================= */

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

        selected
          ? "is-selected"
          : "",

        revealed
          ? "is-revealed"
          : "",

      ].join(" ")}

      disabled={locked}

      onClick={() =>
        onSelect(index)
      }
    >

      <div className="playing-card-inner">

        <CardBack />

        <CardFront
          hand={hand}
        />

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

        <div className="mask-star">
          ✦
        </div>

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


/* =========================================================
   GAME
========================================================= */

export default function Home() {

  const [battle, setBattle] =
    useState(1);

  const [phase, setPhase] =
    useState("normal");

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

  const [
    predictionHit,
    setPredictionHit,
  ] =
    useState(null);

  const [cards, setCards] =
    useState([]);


  const canReveal =
    selected !== null &&
    prediction !== null &&
    result === null;


  const rockCount =
    cards.filter(
      (card) =>
        card === "rock"
    ).length;


  const scissorsCount =
    cards.filter(
      (card) =>
        card === "scissors"
    ).length;


  const paperCount =
    cards.filter(
      (card) =>
        card === "paper"
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

    if (
      result !== null
    ) {
      return;
    }

    setSelected(index);
  }


  function revealCard() {

    if (!canReveal) {
      return;
    }

    const mine =
      randomHand();

    const enemy =
      randomHand();

    setPlayerHand(mine);

    setEnemyHand(enemy);

    setRevealed(selected);


    if (
      mine === enemy
    ) {

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


      if (
        phase === "normal"
      ) {

        setCards(
          (old) => {

            if (
              old.length >= 9
            ) {
              return old;
            }

            return [
              ...old,
              mine,
            ];
          }
        );
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

    if (
      cards.length >= 9
    ) {
      return;
    }

    setBattle(
      (old) =>
        Math.min(
          old + 1,
          9
        )
    );

    clearRound();
  }


  function retryDraw() {

    clearRound();
  }


  function startFinalBattle() {

    if (
      cards.length !== 9
    ) {
      return;
    }

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
            <b>
              ✦
            </b>
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

            <small>
              No.01
            </small>

            <strong>
              ノクティス
            </strong>

            <em>
              Noctis
            </em>

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

            {
              phase === "final"

                ? "FINAL BATTLE"

                : `SET ${Math.ceil(
                    battle / 3
                  )} / BATTLE ${battle}`
            }

          </div>


          <div className="score-box">

            <span>
              {
                phase === "final"
                  ? "CARDS"
                  : "SCORE"
              }
            </span>

            <strong>
              {cards.length}
            </strong>

            <small>
              / 9
            </small>

          </div>

        </header>


        {
          phase === "final" && (

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

          )
        }


        <div className="instruction">

          <h2>

            {
              phase === "final"

                ? "最後のカードを選んで、勝敗を予想しよう"

                : "カードを1枚選んで、同時に勝敗を予想しよう"
            }

          </h2>

          <p>
            ※ あいこの場合は再勝負
          </p>

        </div>


        <div className="prediction-row">


          <button
            className={
              `prediction-button win ${
                prediction === "win"
                  ? "active"
                  : ""
              }`
            }

            onClick={() => {

              if (!result) {
                setPrediction(
                  "win"
                );
              }

            }}
          >

            <span>
              ♛
            </span>

            勝つ

          </button>


          <button
            className={
              `prediction-button lose ${
                prediction === "lose"
                  ? "active"
                  : ""
              }`
            }

            onClick={() => {

              if (!result) {
                setPrediction(
                  "lose"
                );
              }

            }}
          >

            <span>
              ☠
            </span>

            負ける

          </button>


        </div>


        <div className="card-stage">


          <div className="main-cards">

            {
              [0, 1, 2].map(
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
              )
            }


            {
              result &&
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

                    {
                      resultLabel
                    }

                    <span className="result-star right">
                      ✦
                    </span>

                  </div>


                  <div className="prediction-result">

                    {
                      result === "draw"

                        ? (
                          <>

                            <strong>
                              あいこ
                            </strong>

                            <span>
                              再勝負
                            </span>

                          </>
                        )

                        : (
                          <>

                            <strong>

                              {
                                predictionHit
                                  ? "予言通り！"
                                  : "予言失敗"
                              }

                            </strong>

                            <span>

                              {
                                phase === "final"

                                  ? `×${currentFinalValue}`

                                  : `${
                                      predictionHit
                                        ? "+"
                                        : ""
                                    }${
                                      predictionHit
                                        ? currentPoint
                                        : 0
                                    }pt`
                              }

                            </span>

                          </>
                        )
                    }

                  </div>

                </div>

              )
            }


          </div>


          {
            !result && (

              <button
                className="flip-button"

                disabled={
                  !canReveal
                }

                onClick={
                  revealCard
                }
              >

                {
                  phase === "final"

                    ? "FINAL CARDをめくる"

                    : "選んだカードをめくる"
                }

              </button>

            )
          }


        </div>


        {
          result && (

            <div className="after-result">


              {
                result === "draw"

                  ? (

                    <button
                      className="next-button"

                      onClick={
                        retryDraw
                      }
                    >

                      再勝負する

                      <span>
                        ▶
                      </span>

                    </button>

                  )


                  : phase === "final"

                  ? (

                    <button
                      className="next-button"

                      onClick={
                        restartGame
                      }
                    >

                      もう一度遊ぶ

                      <span>
                        ▶
                      </span>

                    </button>

                  )


                  : isNinthResult

                  ? (

                    <button
                      className="next-button final-button"

                      onClick={
                        startFinalBattle
                      }
                    >

                      FINAL BATTLEへ

                      <span>
                        ▶
                      </span>

                    </button>

                  )


                  : (

                    <button
                      className="next-button"

                      onClick={
                        nextNormalBattle
                      }
                    >

                      次の勝負へ

                      <span>
                        ▶
                      </span>

                    </button>

                  )
              }


            </div>

          )
        }


        {/* HISTORY */}

        <section className="history-panel">

          <h3>
            これまでに引いたカード
          </h3>


          <div className="history-layout">

            <div className="history-cards">


              {
                Array.from({
                  length: 9,
                }).map(
                  (_, index) => {

                    const hand =
                      cards[index];


                    return (

                      <div
                        className={
                          `history-card ${
                            hand
                              ? `filled ${hand}`
                              : ""
                          }`
                        }

                        key={index}
                      >

                        {
                          hand

                            ? (
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
                            )

                            : (
                              <>

                                <span className="history-index">

                                  {
                                    index + 1
                                  }

                                </span>

                                <span className="history-star">
                                  ✦
                                </span>

                              </>
                            )
                        }

                      </div>

                    );

                  }
                )
              }


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
