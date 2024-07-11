import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        green: string;
        purple: string;
        white: string;
        black: string;
        gray: string;
        darkGray: string;
        success: string;
        info: string;
        warning: string
    },
    fonts: {
        family: {
        default: string;
        },
        sizes: {
        default: string;
        large: string;
        small: string;
        }
    }
  }
}