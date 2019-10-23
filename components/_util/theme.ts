import common from "./themeCommon";

declare type ThemeObject = {
  [propName: string]: string;
};

const DefaultTheme: ThemeObject = {
  ...common,
  primaryColor: "#2d72d9",
  headerHeight: "3.75rem"
};
export default DefaultTheme;
