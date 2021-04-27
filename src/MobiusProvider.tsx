import { PropsWithChildren } from "react";
import { Theme } from "@theme-ui/core";
import { ThemeProvider } from "@simplybusiness/mobius-core";
import { MobiusComponentContext, MobiusComponentContextType } from "./contexts";

export interface ThemeWithOverrides extends Theme {
  overrides: Theme;
}

export interface MobiusContextProps {
  components?: MobiusComponentContextType;
  theme?: ThemeWithOverrides;
}

export function MobiusProvider({
  components,
  theme,
  children,
}: PropsWithChildren<MobiusContextProps>) {
  // TODO: Figure out a cleaner way of doing this

  if (components && theme) {
    return (
      <MobiusComponentContext.Provider value={components}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MobiusComponentContext.Provider>
    );
  }

  if (components) {
    return (
      <MobiusComponentContext.Provider value={components}>
        {children}
      </MobiusComponentContext.Provider>
    );
  }

  if (theme) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return <>{children}</>;
}
