import React from "react";
import { Formik } from "formik";
import { drinkSchema } from "../validationSchemas/drinkSchema";
import { duplicateDrinkType } from "../types";
import { typeInitalValues } from "../utils/typeInitalValues";
// import { CgMathPlus } from "react-icons/cg";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import BackspaceIcon from "@mui/icons-material/Backspace";

interface Props {
  closeForm: (
    type: string,
    volume: string,
    unit: string,
    abv: string,
    timePassed: string
  ) => void;
  duplicateDrinkData: duplicateDrinkType | null;
  addingNewDrink: boolean;
  cancelAdding: () => void;
}

export const NewDrink: React.FC<Props> = ({
  closeForm,
  duplicateDrinkData,
  addingNewDrink,
  cancelAdding,
}) => {
  return !addingNewDrink ? null : (
    <div className="newdrink__container">
      <Formik
        initialValues={{
          type: duplicateDrinkData?.type || "large-beer",
          volume: duplicateDrinkData?.volume || "500",
          unit: duplicateDrinkData?.unit || "ml",
          timePassed: "",
          abv: duplicateDrinkData?.abv || "5.3",
        }}
        onSubmit={(values) => {
          closeForm(
            values.type,
            values.volume,
            values.unit,
            values.abv,
            values.timePassed
          );
        }}
        validationSchema={drinkSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setValues,
          errors,
          touched,
        }) => (
          <form className="newdrink__form">
            <div className="newdrink__parameter-container newdrink__title">
              <h4>Aký nápoj?</h4>
              <select
                name="type"
                onChange={(e) => setValues(typeInitalValues(e.target.value))}
                onBlur={handleBlur}
                value={values.type}
                className="newdrink__type-input"
              >
                <option value="large-beer">Pivo</option>
                {/* <option value="small-beer">Malé pivo</option> */}
                <option value="glass-wine">Pohár vína</option>
                <option value="shot-vodka">Vodka</option>
                <option value="cognac">Konjak</option>
                <option value="whisky">Whiski</option>
                <option value="gin-tonic">Gin Tonic</option>
                <option value="mojito">Mojito</option>
                <option value="bloody-mary">Bloody Mary</option>
                <option value="white-russian">White Russian</option>
                <option value="martini">Martini</option>
                {/* <option value="coctail">Iný koktail</option> */}
                <option value="other">Iný nápoj</option>
              </select>
            </div>
            <div className="newdrink__parameter-container newdrink__parameter-container1">
              <h4
                style={{
                  color:
                    errors.volume && touched.volume ? "#ff0033" : "#6f7780",
                }}
              >
                Koľko?
              </h4>
              <div className="newdrink__parameter-subcontainer">
                <input
                  name="volume"
                  placeholder=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.volume}
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="newdrink__volume-input"
                />
                <h3>ml</h3>
              </div>
            </div>
            <hr className="drinkcard__line" />
            <div className="newdrink__parameter-container newdrink__parameter-container2">
              <h4
                style={{
                  color: errors.abv && touched.abv ? "#ff0033" : "#6f7780",
                }}
              >
                Aké tvrdé?
              </h4>
              <div className="newdrink__parameter-subcontainer">
                <input
                  name="abv"
                  placeholder=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abv}
                  type="number"
                  step="0.1"
                  inputMode="decimal"
                  // type="text"
                  // pattern="[0-9]*"
                  // inputMode="numeric"
                  className="newdrink__abv-input"
                />
                <h3>%</h3>
              </div>
            </div>
            <div className="newdrink__parameter-container newdrink__parameter-container3">
              <h4
                style={{
                  color:
                    errors.timePassed && touched.timePassed
                      ? "#ff0033"
                      : "#6f7780",
                }}
              >
                {" "}
                Dávno?{" "}
              </h4>
              <div className="newdrink__parameter-subcontainer">
                <div className="input-only-pc">
                  <input
                    name="timePassed"
                    placeholder=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.timePassed}
                    type="number"
                    step="0.5"
                    min="0.5"
                    // onKeyDown={(e) => {
                    //   if (e.key === "-") {
                    //     e.preventDefault();
                    //   }
                    // }}
                    onKeyDown={(e) => {
                      if (e.key === "-") {
                        e.preventDefault();
                      }
                      if (e.key === ".") {
                        e.preventDefault();
                      }
                      if (e.key === ",") {
                        e.preventDefault();
                      }
                    }}
                    inputMode="decimal"
                    // type="text"
                    pattern="[0-9]*"
                    // inputMode="numeric"
                    className="newdrink__timePassed-input"
                  />
                </div>
                <div className="input-only-mob">
                  <select
                    name="timePassed"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.timePassed}
                    className="newdrink__timePassed-input"
                  >
                    {[...Array(48)].map((_, i) => {
                      const time = i / 2;
                      return (
                        <option key={time} value={time}>
                          {time.toFixed(1)} hod.
                        </option>
                      );
                    })}
                  </select>
                </div>
                <h3>hod.</h3>
              </div>
            </div>
            <Button
              className="drinkcard__del-mui-icon newdrink__mobile-plus-button"
              onClick={() => handleSubmit()}
              sx={{ borderRadius: 10 }}
              variant="contained"
              startIcon={<SaveIcon />}
              style={{ minWidth: "unset", background: "#7CA982" }}
            >
              Uložiť
            </Button>
            {/* {window.screen.width < 680 ? " " : null} */}
            <Button
              className="drinkcard__plus-icon newdrink__mobile-del-button"
              onClick={() => cancelAdding()}
              sx={{ borderRadius: 10 }}
              variant="contained"
              startIcon={<BackspaceIcon />}
              style={{ minWidth: "unset", background: "#C6685D" }}
            >
              Zrušiť
            </Button>
            {/* <CgMathPlus
              className="drinkcard__plus-icon drinkcard__action-icon newdrink__plus-icon"
              onClick={() => handleSubmit()}
            />
            <CgMathPlus
              className="drinkcard__del-icon drinkcard__action-icon newdrink__del-icon"
              onClick={() => cancelAdding()}
            />
            <button
              className="newdrink__mobile-plus-button"
              onClick={() => handleSubmit()}
            >
              Pridať
            </button>{" "}
            <button
              className="newdrink__mobile-del-button"
              onClick={() => cancelAdding()}
            >
              Odstrániť
            </button> */}
          </form>
        )}
      </Formik>
    </div>
  );
};
