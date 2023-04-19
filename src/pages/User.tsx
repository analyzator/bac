import React from "react";
import { Formik } from "formik";
import { RouteComponentProps } from "react-router";
import { useLocalStorage } from "../utils/useLocalState";
import { userParamCalc } from "../utils/userParamCalc";
import { userSchema } from "../validationSchemas/userSchema";
// import { Button } from "@mui/material"
import "../Style.css";

interface UserProps extends RouteComponentProps {}

export const User: React.FC<UserProps> = ({ history }) => {
  const [userParams, setUserParams] = useLocalStorage("userParams", {});

  const goHome = () => {
    history.push("/");
  };

  return (
    <Formik
      initialValues={{
        weight: userParams.weight || "",
        height: userParams.height || "",
        age: userParams.age || "",
        sex: userParams.sex || "",
        stomachState: userParams.stomachState || "",
        drinkingHabits: userParams.drinkingHabits || "",
      }}
      onSubmit={(values) => {
        const params = userParamCalc(
          values.weight,
          values.height,
          values.age,
          values.sex,
          values.stomachState,
          values.drinkingHabits
        );
        setUserParams({
          weight: values.weight,
          height: values.height,
          age: values.age,
          sex: values.sex,
          stomachState: values.stomachState,
          drinkingHabits: values.drinkingHabits,
        });

        history.push(
          `/user/drinks/${params.widmarkFactor};${params.eliminationRate};${params.absorptionRate};${params.weight}`
        );
      }}
      validationSchema={userSchema}
    >
      {({
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isValid,
      }) => (
        <div className="userform__container container">
          <div className="Logo userform__logo-web" onClick={goHome}>
            <h1>Alkoholový analyzátor</h1>
          </div>
          <form className="userform__form-container">
            <div className="Logo userform__logo-mobile" onClick={goHome}>
              <h1>Alkoholový analyzátor</h1>
            </div>
            <div className="userform__title-container userform__g1">
              <h2>Zadajte svoje fyzické charakteristiky</h2>
            </div>
            <div className="userform__g2 userform__radiobuttons-container">
              <input
                type="radio"
                name="sex"
                value="male"
                id="male"
                checked={values.sex === "male"}
                onChange={() => setFieldValue("sex", "male")}
                style={{ display: "none" }}
              />
              <label
                className="userform__radio-label"
                htmlFor="male"
                style={{
                  border:
                    values.sex === "male"
                      ? "1px solid #dc3806"
                      : "1px solid #818181",
                }}
              >
                Muž
              </label>
              <input
                type="radio"
                name="sex"
                value="female"
                id="female"
                checked={values.sex === "female"}
                onChange={() => setFieldValue("sex", "female")}
                style={{ display: "none" }}
              />
              <label
                className="userform__radio-label"
                htmlFor="female"
                style={{
                  border:
                    values.sex === "female"
                      ? "0.5px solid #dc3806"
                      : "0.5px solid #B1B4B6",
                }}
              >
                Žena
              </label>
            </div>
            <hr className="userform__line userform__line1" />
            <h4
              className=" userform__description userform__g3"
              style={{
                color: errors.weight && touched.weight ? "#ff0033" : "#3f4649",
              }}
            >
              Zadajte svoju hmotnosť v kilogramoch
            </h4>

            <input
              name="weight"
              placeholder="kaal (kg)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.weight}
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              className=" userform__text-input userform__g4"
            />

            <h4
              className=" userform__description userform__g5"
              style={{
                color: errors.height && touched.height ? "#ff0033" : "#3f4649",
              }}
            >
              Zadajte svoju výšku v centimetroch
            </h4>
            <input
              name="height"
              placeholder="pikkus (cm)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.height}
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              className=" userform__text-input userform__g6"
            />

            <h4
              className=" userform__description userform__g7"
              style={{
                color: errors.age && touched.age ? "#ff0033" : "#3f4649",
              }}
            >
              Zadajte svoj vek v rokoch
              {/* <Button variant="contained">lol</Button> */}
            </h4>
            <input
              name="age"
              placeholder="vanus (aastat)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              className=" userform__text-input userform__g8"
            />
            <hr className="userform__line userform__line2" />
            <h4
              className="userform__description userform__g9"
              style={{
                color:
                  errors.stomachState && touched.stomachState
                    ? "#ff0033"
                    : "#3f4649",
              }}
            >
              Boli ste najedený?
              {window.screen.width < 680 ? null : <br />}
            </h4>
            <select
              name="stomachState"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.stomachState}
              className=" userform__select-input userform__g10"
            >
              <option value="25"></option>
              <option value="full">Najedený</option>
              <option value="mostly-full">Skôr najedený</option>
              <option value="average">V priemere</option>
              <option value="mostly-empty">Skôr hladný</option>
              <option value="empty">Hladný</option>
            </select>

            <h4
              className=" userform__description userform__g11"
              style={{
                color:
                  errors.drinkingHabits && touched.drinkingHabits
                    ? "#ff0033"
                    : "#3f4649",
              }}
            >
              Ako často spotrebujete alkohol týždenne?
              {window.screen.width < 680 ? null : <br />}
            </h4>
            <select
              name="drinkingHabits"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.drinkingHabits}
              className=" userform__select-input userform__g12"
            >
              <option value="25"></option>
              <option value="everyday">Každý deň</option>
              <option value="often">Niekoľkokrát týždenne</option>
              <option value="sometimes">Raz týždenne</option>
              <option value="rarely">Menej ako raz týždenne</option>
            </select>
            <hr className="userform__line userform__line3" />
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="full-element userform__button userform__g13"
              disabled={!isValid || "" in values ? true : false}
            >
              Vložiť
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};
