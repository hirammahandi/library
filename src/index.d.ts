import "styled-components";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAFBASE_API_KEY: string;
      API_KEY: string;
    }
  }
}

export {};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      lightPrimary: string;
      black: string;
      gray: string;
      white: string;
    };
  }
}
