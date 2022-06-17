import React from "react";
import { profile, dusty, reality, biscuit, pobox, } from "../../Icons";
import "./Suggestions.scss";

const Suggestions = () => {
  return (
    <div className="app__suggestions">
      <div className="suggestions__container">
        <div className="user__suggestion">
          <div className="use__suggestion-container">
            <img src={profile} alt="" />
            <div className="user__info-wrapper">
              <span>thisisyou</span>
              <p>This Is You</p>
            </div>
          </div>
          <button>Switch</button>
        </div>
        <div className="suggestion__title">
          <p>Suggestion for you</p>
          <span>See all</span>
        </div>

        <div className="suggestions__content">
          <div className="user__content">
            <div className="user__container">
              <img src={biscuit} alt="" />
              <div className="container__content">
                <span>nakedmariebiscuit</span>
                <span>follows you</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__content">
            <div className="user__container">
              <img src={dusty} alt="" />
              <div className="container__content">
                <span>dustyorchid</span>
                <span>follows you</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__content">
            <div className="user__container">
              <img src={pobox} alt="" />
              <div className="container__content">
                <span>poboxza</span>
                <span>follows you</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__content">
            <div className="user__container">
              <img src={reality} alt="" />
              <div className="container__content">
                <span>finetunedreality</span>
                <span>follows you</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
