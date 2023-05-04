import React, { useState, useRef } from "react";
import "./Insights.css";
import { Accordion, Button, Col, Row, Table, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../../UI/Card";
import InsightsItem1 from "./InsightsItems/InsightsItem1";
import InsightsItem2 from "./InsightsItems/InsightsItem2";
import InsightsItem3 from "./InsightsItems/InsightsItem3";

const Insights = function () {
  const [isSelectedItem1, setIsSelectedItem1] = useState(false);
  const [isSelectedItem2, setIsSelectedItem2] = useState(false);
  const [isSelectedItem3, setIsSelectedItem3] = useState(false);

  const item1StateHandler = function (e) {
    e.preventDefault();
    if (!isSelectedItem1) {
      setIsSelectedItem2(false);
      setIsSelectedItem3(false);
    }
    setIsSelectedItem1((x) => !x);
    /*if (!isSelectedItem1)
      setTimeout(() => {
        cardRef.current.style.minHeight = `${
          (divRef1.current.offsetHeight / 16 + 25) * 16
        }px`;
      }, 0);
    else {
      const temp = divRef1.current.offsetHeight;
      setTimeout(() => {
        cardRef.current.style.minHeight = `${
          (cardRef.current.style.minHeight - temp) / 16
        }px`;
      }, 0);*/
  };
  const item2StateHandler = function (e) {
    e.preventDefault();
    if (!isSelectedItem2) {
      setIsSelectedItem1(false);
      setIsSelectedItem3(false);
    }
    setIsSelectedItem2((x) => !x);
  };

  const item3StateHandler = function (e) {
    e.preventDefault();
    if (!isSelectedItem3) {
      setIsSelectedItem1(false);
      setIsSelectedItem2(false);
    }
    setIsSelectedItem3((x) => !x);
  };

  return (
    <Card className="insights">
      <div
        className="card-header "
        style={{
          position: "absolute",
          left: "1rem",
          top: "2rem",
          fontWeight: "400",
        }}
      >
        <h3>Insights</h3>
      </div>

      <div className="nimmu-accordion parent" id="accordionExample">
        <div
          onClick={item1StateHandler}
          className="card"
          style={{
            position: "relative",
            top: "6rem",
            marginBottom: "4rem",
          }}
        >
          <div
            className="card-header"
            id="headingOne"
            style={{
              position: "absolute",

              background: `${isSelectedItem1 ? "#3C54DB" : ""}`,
              width: "100%",

              borderColor: "#3c54db",
              margin: "0 auto",
            }}
          >
            <button className="btn btn-link" type="button">
              <h2
                className="mb-0"
                style={{
                  position: "relative",
                  marginLeft: "0",
                  fontSize: "100%",
                  color: `${isSelectedItem1 ? "white" : "black"}`,
                  fontWeight: "350",
                }}
              >
                98% of your Customers are from : India
              </h2>
              {isSelectedItem1 && (
                <FontAwesomeIcon
                  icon={faAngleUp}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 6,
                    transform: "translateY(-50%)",
                    color: "white",
                  }}
                />
              )}
              {!isSelectedItem1 && (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 6,
                    transform: "translateY(-50%)",
                    color: "black",
                  }}
                />
              )}
            </button>
          </div>
        </div>

        {isSelectedItem1 && (
          <div
            style={{
              position: "relative",
              top: "6rem",
              marginBottom: "2rem",
            }}
          >
            <InsightsItem1 />
          </div>
        )}

        <div
          className="card"
          onClick={item2StateHandler}
          style={{
            position: "relative",
            top: "9rem",
            marginBottom: "10rem",
          }}
        >
          <div
            className="card-header"
            id="headingOne"
            style={{
              position: "absolute",

              background: `${isSelectedItem2 ? "#3C54DB" : ""}`,
              width: "100%",

              borderColor: "#3c54db",
              margin: "0 auto",
            }}
          >
            <button className="btn btn-link" type="button">
              <h2
                className="mb-0"
                style={{
                  position: "relative",
                  marginLeft: "0",
                  fontSize: "100%",
                  color: `${isSelectedItem2 ? "white" : "black"}`,
                  fontWeight: "350",
                }}
              >
                50% of Customers work in large Organisations
              </h2>
              {isSelectedItem2 && (
                <FontAwesomeIcon
                  icon={faAngleUp}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 6,
                    transform: "translateY(-50%)",
                    color: "white",
                  }}
                />
              )}
              {!isSelectedItem2 && (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 6,
                    transform: "translateY(-50%)",
                    color: "black",
                  }}
                />
              )}
            </button>
          </div>
        </div>
        {isSelectedItem2 && (
          <div
            style={{
              position: "relative",
              top: "4rem",
              marginBottom: "2rem",
            }}
          >
            <InsightsItem2 />
          </div>
        )}

        <div
          className="card"
          onClick={item3StateHandler}
          style={{
            position: "relative",
            marginBottom: "10rem",
          }}
        >
          <div
            className="card-header"
            id="headingOne"
            style={{
              position: "absolute",
              top: "6rem",
              background: `${isSelectedItem3 ? "#3C54DB" : ""}`,
              width: "100%",

              borderColor: "#3c54db",
              margin: "0 auto",
            }}
          >
            <button className="btn btn-link" type="button">
              <h2
                className="mb-0"
                style={{
                  position: "relative",
                  marginLeft: "0",
                  fontSize: "100%",
                  color: `${isSelectedItem3 ? "white" : "black"}`,
                  fontWeight: "350",
                }}
              >
                16% Your Customers work in : Professional Services Industry
              </h2>
              {isSelectedItem3 && (
                <FontAwesomeIcon
                  icon={faAngleUp}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 6,
                    transform: "translateY(-50%)",
                    color: "white",
                  }}
                />
              )}
              {!isSelectedItem3 && (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 6,
                    transform: "translateY(-50%)",
                    color: "black",
                  }}
                />
              )}
            </button>
          </div>
        </div>
        {isSelectedItem3 && (
          <div
            style={{
              position: "relative",
              top: "2rem",
              marginBottom: "8rem",
            }}
          >
            <InsightsItem3 />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Insights;
