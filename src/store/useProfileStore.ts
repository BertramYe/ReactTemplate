import { create } from 'zustand';
import type { TToken } from "@/api/tokener"
import type { TContactKeysList } from "@/api/schemas"


type TProfile = Partial<TToken & {
    [key in TContactKeysList ]?:string
}>

type TProfileStore = {
    Profile:TProfile;
    updateProfile: (newProfile: TProfile) => void;
}

const useProfileStore = create<TProfileStore>((set,get) => ({
  Profile:{},
  updateProfile: (newProfile) => {
    const currentProfile = get().Profile; // get 获取最新状态
    // 使用 set 更新状态
    set((_state) => ({
      Profile: {
        // ...state.Profile,
        ...currentProfile,
        ...newProfile
      },
    }));
  }
}));

export default useProfileStore;


export {
  type TProfileStore,
  type TProfile
}