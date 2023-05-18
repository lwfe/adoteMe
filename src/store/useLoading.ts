import { create } from 'zustand'

interface LoadingStore {
    loading: boolean
    setLoading: (newValue: boolean) => void
}

export const useLoading = create<LoadingStore>((set)=> ({
    loading: false,
    setLoading: (newValue) => set({ loading: newValue })
}))