import { makeVar } from "@apollo/client";

export const popupVar = makeVar({
  show: false,
  message: "",
  type: "error",
});
