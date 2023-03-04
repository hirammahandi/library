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
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  }
}
/* 
declare module "react" {
  // augment React types
  function memo<A, B>(Component: (props: A) => B): (props: A) => ReactElement | null;
  // return type is same as ReturnType<ExoticComponent<any>>

  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: ForwardedRef<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null;
} */

/* 
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
 */
