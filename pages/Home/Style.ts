import { ColFlex } from "@/Styles/Layout";
import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const LRColStyle: CSSProperties = {
  ...ColFlex,
  flexBasis: "25%",
  rowGap: tokens.spacingVerticalXL
}
