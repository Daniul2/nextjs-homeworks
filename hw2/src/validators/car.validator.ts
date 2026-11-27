import {z} from "zod";

export const carValidator = z.object({
    brand: z
        .string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/, 'Tylko litery, od 1 do 20 znaków'),
    price: z.coerce
        .number({message: 'Cena musi być liczbą'})
        .int('Cena musi być liczbą całkowitą')
        .min(0, 'Minimalna cena to 0')
        .max(1_000_000, 'Maksymalna cena to 1 000 000'),
    year: z.coerce
        .number({message: 'Rok musi być liczbą'})
        .int('Rok musi być liczbą całkowitą')
        .min(1990, 'Minimalny rok to 1990')
        .max(new Date().getFullYear(), `Maksymalny rok to ${new Date().getFullYear()}`),
});
