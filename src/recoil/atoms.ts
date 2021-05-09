import { atom } from 'recoil'

export type ItemType = {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<ItemType[]>({
  key: 'todoListState',
  default: [],
})

export const todoListFilterState = atom<string>({
  key: 'todoListFilterState',
  default: 'Show All',
})
