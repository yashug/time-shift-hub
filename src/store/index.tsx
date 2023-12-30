import { create } from "zustand";

type TimeFormat = 12 | 24;

type TimeHubStore = {
  timeFormat: TimeFormat;
  setTimeFormat: (timeFormat: TimeFormat) => void;
};

export const useTimeHubStore = create<TimeHubStore>((set) => ({
  timeFormat: 12,
  setTimeFormat: (timeFormat) => set({ timeFormat }),
}));
