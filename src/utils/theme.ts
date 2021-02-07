import { DefaultTheme } from "styled-components";

export interface ITheme extends DefaultTheme{
  colors: {
    primary: string;
    secondary: string;
    mainBg: string;
    contrastText: string;
    wrong: string;
    success: string;
  },
  borderRadius: string;
}

const theme: ITheme = {
  "colors": {
    "primary": "#fdd000",
    "secondary": "#5d6d7c",
    "mainBg": "#f2efe2",
    "contrastText": "#000000",
    "wrong": "#FF5722",
    "success": "#4CAF50"
  },
  "borderRadius": "4px"
}

export const backgroundImage = "https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

export default theme;