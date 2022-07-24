import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { State, AppDispatch } from '../types/state';

export const useAppDisptach = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
