// theme.ts
import { Theme as EmotionTheme } from "@emotion/react";

// theme interface
export interface CustomTheme extends EmotionTheme {
  modalBackground: string;
  background: string;
  color: string;
  borderColor:string;
  buttonHover: string;
  selectHover: string;
}

export const lightTheme:CustomTheme = {
  modalBackground: "#ffffff",
  background:"#ffffff",
  color: "#000000",
  borderColor: "#e0e0e0",
  buttonHover: "#f0f0f0",
  selectHover: "#d0d0d0"
};

export const darkTheme:CustomTheme = {
  modalBackground: "#1e1e1e",
  background:"#111111",
  color: "#ffffff",
  borderColor: "#3a3a3a",
  buttonHover: "#333333",
  selectHover: "#4a4a4a"
};