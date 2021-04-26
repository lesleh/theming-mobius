import { PropsWithChildren } from "react";
import { ThemeProvider } from "@simplybusiness/mobius-core";
import {
  MobiusComponentContext,
  MobiusComponentContextType,
  MobiusThemeContext,
  MobiusThemeContextType,
} from "./contexts";

export interface MobiusContextProps {
  components?: MobiusComponentContextType;
  theme?: MobiusThemeContextType;
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
    return (
      <MobiusThemeContext.Provider value={theme}>
        {children}
      </MobiusThemeContext.Provider>
    );
  }

  return children;
}
