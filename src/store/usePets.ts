import { create } from 'zustand'

interface PetsStore {
    data: petsDTO[]
    setPets: (data: petsDTO[]) => void
}

export const usePets = create<PetsStore>((set) => ({
    data: [],
    setPets: (newData) => set({ data: newData})
}))

