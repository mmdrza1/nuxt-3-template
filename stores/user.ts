import { defineStore } from "pinia";
interface userInfo {
  firstName: string;
  lastName: string;
  age: Number;
}

export const useUserStore = defineStore("user", {
  state: (): userInfo => {
    return {
      firstName: "",
      lastName: "",
      age: 0,
    };
  },

  getters: {
    fullName(state): string {
      return state.firstName + " " + state.lastName;
    },
  },
});
