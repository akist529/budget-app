import { createContext } from "react";
import AppContextType from "@customTypes/AppContextType";

export const AppContext = createContext<AppContextType | null>(null);