import { create } from 'zustand'

interface PetsStore {
    data: petsDTO[]
    
}

export const usePets = create<PetsStore>((set) => ({
    data:[
        { id: 1, animal: 'Gato', image: 'https://images.pexels.com/photos/4178730/pexels-photo-4178730.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Viego', idade: '2 anos', sexo: 'Macho', castrado: false, raça: 'SRD', contatoAdoção: '123321' },
        { id: 2, animal: 'Gato', image: 'https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Peppy', idade: '1 ano', sexo: 'Fêmea', castrado: true, raça: 'Siamês', contatoAdoção: '123321' },
        { id: 3, animal: 'Gato', image: 'https://images.pexels.com/photos/7210652/pexels-photo-7210652.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Tigrão', idade: '5 anos', sexo: 'Macho', castrado: true, raça: 'Maine Coon', contatoAdoção: '123321' },
        { id: 4, animal: 'Gato', image: 'https://images.pexels.com/photos/1644767/pexels-photo-1644767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', nome: 'Fox', idade: '8 meses', sexo: 'Fêmea', castrado: false, raça: 'Persa', contatoAdoção: '123321' },
        { id: 5, animal: 'Gato', image: 'https://images.pexels.com/photos/16609385/pexels-photo-16609385.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Diana', idade: '2 anos', sexo: 'Fêmea', castrado: false, raça: 'SRD', contatoAdoção: '123321' },
        { id: 6, animal: 'Gato', image: 'https://images.pexels.com/photos/15558711/pexels-photo-15558711.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Qyiana', idade: '3 anos', sexo: 'Fêmea', castrado: true, raça: 'SRD', contatoAdoção: '123321' },
      ],
}))