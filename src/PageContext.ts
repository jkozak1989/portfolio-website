import { createContext, Dispatch, SetStateAction } from "react";
import { PageOption } from "./App";

export const PageContext = createContext<{ page: PageOption; setPage: Dispatch<SetStateAction<PageOption>> }>({
  page: 'Home',
  setPage: () => {},
});