import { create } from 'zustand';

export const useProjectsStore = create(set => ({
  states: {
    projects: [],
  },
  actions: {},
}));
