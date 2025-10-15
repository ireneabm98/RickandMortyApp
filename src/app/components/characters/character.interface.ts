export interface Character {
    id: number;
    name: string;
    status: string; // 👈 Agregamos esta línea
    species: string;
    gender: string;
    image: string;
    episode: string[];
}
