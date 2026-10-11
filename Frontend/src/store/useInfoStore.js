import { create } from "zustand";

export const useInfoStore = create((set) => ({
  teams: [],
  players: [],

  addTeam: (team) => set((state) => ({ teams: [team, ...state.teams] })),
  addPlayer: (player) =>
    set((state) => ({ players: [player, ...state.players] })),
}));
