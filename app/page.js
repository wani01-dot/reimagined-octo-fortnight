"use client";

import { useState } from "react";

const HANDS = {
  rock: {
    mark: "✊",
    code: "R",
    number: "01",
    name: "ROCK",
    jp: "グー",
    point: 1,
  },
  scissors: {
    mark: "✌",
    code: "S",
    number: "02",
    name: "SCISSORS",
    jp: "チョキ",
    point: 2,
  },
  paper: {
    mark: "✋",
    code: "P",
    number: "05",
    name: "PAPER",
    jp: "パー",
    point: 5,
  },
};

const HAND_KEYS = ["rock", "scissors", "paper"];

const BEATS = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

function randomHand() {
  return HAND_KEYS[Math.floor(Math.random() * HAND_KEYS.length)];
}

function PlayingCard({
  selected,
  revealed,
  hand,
  disabled,
  onClick,
}) {
  return (
    <button
      className={[
        "playingCard",
        selected ? "selected" : "",
        revealed ? "revealed" : "",
      ].join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="cardInner">
        <div className="cardBack">
          <div className="backFrame">
            <span className="backStar">✦</span>
          </div>
        </div>

        <div className="cardFront">
          {hand && (
            <>
              <div className="corner">
                <strong>{HANDS[hand].code}</strong>
                <span>{HANDS[hand].number}</span>
              </div>

              <div className="handIllustration">
                {HANDS[hand].mark}
              </div>

              <div className="handName">
                {HANDS[hand].name}
              </div>
            </>
          )}
        </div>
      </div>
    </button>
  );
}

export default function Home() {
  const [battle, setBattle] = useState(1);

  const [prediction, setPrediction] =
    useState(null);

  const [selectedCard, setSelectedCard] =
    useState(null);

  const [revealedCard, setRevealedCard] =
    useState(null);

  const [playerHand, setPlayerHand] =
    useState(null);

  const [enemyHand, setEnemyHand] =
    useState(null);

  const [result, setResult] =
    useState(null);

  const [predictionResult, setPredictionResult] =
    useState(null);

  const [collected, setCollected] =
    useState([]);

  const [animating, setAnimating] =
    useState(false);

  const canReveal =
    prediction &&
    selectedCard !== null &&
    !animating &&
    result === null;

  function choosePrediction(value) {
    if (animating || result) return;

    setPrediction(value);
  }

  function chooseCard(index) {
    if (animating || result) return;

    setSelectedCard(index);
  }

  function revealCard() {
    if (!canReveal) return;

    setAnimating(true);

    const mine = randomHand();
    const enemy = randomHand();

    setPlayerHand(mine);
    setEnemyHand(enemy);
    setRevealedCard(selectedCard);

    setTimeout(() => {
      if (mine === enemy) {
        setResult("draw");
        setPredictionResult(null);
        setAnimating(false);
        return;
      }

      const actualResult =
        BEATS[mine] === enemy
          ? "win"
          : "lose";

      setResult(actualResult);

      setPredictionResult(
        prediction === actualResult
      );

      setCollected((prev) => [
        ...prev,
        mine,
      ]);

      setAnimating(false);
    }, 850);
  }

  function retryDraw() {
    setPrediction(null);
    setSelectedCard(null);
    setRevealedCard(null);
    setPlayerHand(null);
    setEnemyHand(null);
    setResult(null);
    setPredictionResult(null);
  }

  function nextBattle() {
    if (collected.length >= 9) {
      return;
    }

    setBattle((prev) => prev + 1);

    setPrediction(null);
    setSelectedCard(null);
    setRevealedCard(null);
    setPlayerHand(null);
    setEnemyHand(null);
    setResult(null);
    setPredictionResult(null);
  }

  const setNumber =
    Math.ceil(battle / 3);

  return (
    <main className="game">
      <header className="header">
        <div>
          <div className="logo">
            JANKEN
            <br />
            FRIENDS
          </div>

          <div className="battleNumber">
            SET {setNumber} / BATTLE {battle}
          </div>
        </div>

        <div className="score">
          <span>CARDS</span>

          <strong>
            {collected.length}
          </strong>

          <small>/ 9</small>
        </div>
      </header>

      <section className="enemy">
        <div className="mask">
          <div className="maskEye left" />
          <div className="maskEye right" />
          <div className="maskLine" />
        </div>

        <div className="enemyNumber">
          No.01
        </div>

        <h1>
          ノクティス・ヴェイン
        </h1>

        <p>
          星喰らいの仮面
        </p>
      </section>

      <section className="instruction">
        <h2>
          カードを1枚選んで、
          <br />
          同時に勝敗を予想しよう
        </h2>

        <p>
          ※ あいこの場合は再勝負
        </p>
      </section>

      <section className="prediction">
        <button
          className={
            prediction === "win"
              ? "predict win active"
              : "predict win"
          }
          onClick={() =>
            choosePrediction("win")
          }
        >
          <span>♔</span>
          勝つ
        </button>

        <button
          className={
            prediction === "lose"
              ? "predict lose active"
              : "predict lose"
          }
          onClick={() =>
            choosePrediction("lose")
          }
        >
          <span>☠</span>
          負ける
        </button>
      </section>

      <section className="cardsArea">
        {[0, 1, 2].map((index) => (
          <PlayingCard
            key={index}
            selected={
              selectedCard === index
            }
            revealed={
              revealedCard === index
            }
            hand={
              revealedCard === index
                ? playerHand
                : null
            }
            disabled={
              animating ||
              result !== null
            }
            onClick={() =>
              chooseCard(index)
            }
          />
        ))}

        {result && (
          <div
            className={[
              "verdict",
              result,
            ].join(" ")}
          >
            <div className="verdictWord">
              {result === "win" &&
                "WIN"}

              {result === "lose" &&
                "LOSE"}

              {result === "draw" &&
                "DRAW"}
            </div>

            <div className="verdictDetail">
              {result === "draw" ? (
                <>
                  あいこ
                  <br />
                  再勝負
                </>
              ) : (
                <>
                  {predictionResult
                    ? "予言通り！"
                    : "予言失敗"}

                  <br />

                  {HANDS[playerHand].jp}
                  {" / "}
                  {HANDS[playerHand].point}
                  pt
                </>
              )}
            </div>
          </div>
        )}
      </section>

      {!result && (
        <button
          className="revealButton"
          disabled={!canReveal}
          onClick={revealCard}
        >
          選んだカードをめくる
        </button>
      )}

      {result && (
        <section className="battleResult">
          <div className="hands">
            <span>
              あなた
              {" "}
              {HANDS[playerHand]?.mark}
            </span>

            <b>VS</b>

            <span>
              {HANDS[enemyHand]?.mark}
              {" "}
              仮面
            </span>
          </div>

          {result === "win" && (
            <div className="winner">
              あなたの勝利
            </div>
          )}

          {result === "lose" && (
            <div className="winner">
              仮面の敵の勝利
            </div>
          )}

          {result === "draw" && (
            <button
              className="nextButton"
              onClick={retryDraw}
            >
              もう一度勝負する
            </button>
          )}

          {result !== "draw" &&
            collected.length < 9 && (
              <button
                className="nextButton"
                onClick={nextBattle}
              >
                次の勝負へ
              </button>
            )}

          {result !== "draw" &&
            collected.length === 9 && (
              <button
                className="nextButton final"
                onClick={() =>
                  alert(
                    "9枚揃った！ 次はFINALへ"
                  )
                }
              >
                FINALへ
              </button>
            )}
        </section>
      )}

      <section className="collection">
        <div className="collectionTitle">
          これまでに引いたカード
        </div>

        <div className="miniCards">
          {Array.from({
            length: 9,
          }).map((_, index) => {
            const hand =
              collected[index];

            return (
              <div
                className={
                  hand
                    ? "miniCard obtained"
                    : "miniCard"
                }
                key={index}
              >
                {hand
                  ? HANDS[hand].mark
                  : index + 1}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
