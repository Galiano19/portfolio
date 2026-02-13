import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    layout: {
      maxWidth: string;
      gutter: string;
    };
    colors: {
      background: string;
      primary: string;
      font: string;
    };
  }
}
