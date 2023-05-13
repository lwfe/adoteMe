declare interface petsDTO {
    animal: "Gato" | "Cachorro"
    image: string
    nome: string
    idade: string
    sexo: "Macho" | "Fêmea"
    castrado: boolean
    raça: string
    contatoAdoção: string
    favorite?: boolean
}