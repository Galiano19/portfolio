import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    layout: {
      maxWidth: string;
      gutter: string;
    };
    breakpoints: {
      md: string;
      lg: string;
    };
    colors: {
      background: string;
      background10: string;
      primary: string;
      font: string;
      border: string;
    };
  }
}
