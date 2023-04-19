import * as Yup from "yup";

export const drinkSchema = Yup.object({
  type: Yup.string()
    .required("Toto pole je povinné")
    .min(4, "Toto pole je povinné"),
  volume: Yup.number().required("Toto pole je povinné"),
  unit: Yup.string()
    .required("Toto pole je povinné")
    .min(2, "Toto pole je povinné"),
  timePassed: Yup.number().max(30).required("Toto pole je povinné"),
  abv: Yup.number()
    .max(100, "Vnútorná sila nápoja v %")
    .required("Toto pole je povinné"),
});
