import { createContext } from "react";
import type { Theme } from "@theme-ui/core";

export type MobiusThemeContextType = Theme | null;
export const MobiusThemeContext = createContext<MobiusThemeContextType>(null);
