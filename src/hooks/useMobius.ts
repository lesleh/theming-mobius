import { useContext } from "react";
import { MobiusComponentContext } from "../contexts";

export function useMobius() {
  return useContext(MobiusComponentContext);
}
