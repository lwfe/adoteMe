import { create } from 'zustand'

interface SelectedPetStore {
    selectedPet: petsDTO
    setSelectedPet: (pet: petsDTO) => void 
}

export const useSelectedPet = create<SelectedPetStore>((set)=> ({
    selectedPet: {animal: 'Gato', castrado: false, contatoAdoção:'', id:1, idade: '', image: '', nome: '', raça: '', sexo: 'Macho'},
    setSelectedPet: (pet) => set(() => ({selectedPet: pet})) 
}))