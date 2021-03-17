import { createContext, useContext } from 'react';
import {data} from "../../store/store";
import {GlobalContent} from "../../types/types";


export const MyGlobalContext  = createContext<GlobalContent>(data);
export const useGlobalContext = () => useContext(MyGlobalContext );






