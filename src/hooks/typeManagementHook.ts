/* eslint-disable */

// This is a custom hook that takes care of type automatically

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/index";

// Use this instead of useDispatch and useSelector

export const useCustomAppDispatch = () => 
    useDispatch<AppDispatch>()

    export const useCustomAppSelector:
    TypedUseSelectorHook<RootState> = useSelector
