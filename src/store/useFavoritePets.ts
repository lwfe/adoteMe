import { create } from 'zustand'

interface FavoritePetsStore {
    favorites: number[]
    addFavorite: (id: number) => void
    removeFavorite: (id: number) => void
}

export const useFavoritePets = create<FavoritePetsStore>(((set) => ({
    favorites: [],
    addFavorite: (pet) => set((state) => ({ favorites: [...state.favorites, pet] })),
    removeFavorite: (id) => set((state) => ({favorites: state.favorites.filter((petId) => petId !== id) }))
})))