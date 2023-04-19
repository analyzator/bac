import * as Yup from "yup";

export const userSchema = Yup.object({
  weight: Yup.number()
    .max(320, "Zadajte svoju hmotnosť v kilogramoch")
    .required("Toto pole je povinné"),
  height: Yup.number()
    .max(235, "Toto pole je povinné")
    .required("Toto pole je povinné"),
  age: Yup.number()
    .max(120, "Toto pole je povinné")
    .required("Toto pole je povinné"),
  sex: Yup.string()
    .min(4, "Toto pole je povinné")
    .required("Toto pole je povinné"),
  stomachState: Yup.string()
    .min(4, "Toto pole je povinné")
    .required("Toto pole je povinné"),
  drinkingHabits: Yup.string()
    .min(4, "Toto pole je povinné")
    .required("Toto pole je povinné"),
});
