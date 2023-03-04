import { GlobalContext } from "@/context";
import { useContext } from "react";

export const useGlobalState = () => useContext(GlobalContext);
