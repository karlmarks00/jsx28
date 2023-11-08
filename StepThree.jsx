import React, { useState } from "react";
import { AnswerItem3 } from "../components/AnswerItem3";

const StepThree = () => {
  const [checkedAnswer, setCheckedAnswer] = useState();

  const variants = [
    {
      id: "variant-1",
      src: "./img/laugh.png",
      alt: "laugh",
      text: "Ваш ответ 1",
    },
    {
      id: "variant-2",
      src: "./img/hearts.png",
      alt: "hearts",
      text: "Ваш ответ 2",
    },
    {
      id: "variant-3",
      src: "./img/smirk.png",
      alt: "smirk",
      text: "Ваш ответ 3",
    },
    {
      id: "variant-4",
      src: "./img/fright.png",
      alt: "fright",
      text: "Ваш ответ 4",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <AnswerItem3
                  id={elem.id}
                  isSrc={elem.src}
                  isAlt={elem.alt}
                  textP={elem.text}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <button type="button" disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
