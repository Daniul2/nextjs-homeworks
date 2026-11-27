import {ICar, ICarCreate} from "@/models/ICar";

const baseUrl = 'http://bigbird.space/carsAPI/v1';

const urls = {
    cars: {
        base: '/cars',
        byId: (id: number) => `/cars/${id}`,
    },
};

export const carService = {
    getAll: async (): Promise<ICar[]> => {
        const res = await fetch(baseUrl + urls.cars.base, {cache: 'no-store'});
        if (!res.ok) throw new Error(`Nie udało się pobrać aut: ${res.status}`);
        return res.json();
    },

    getById: async (id: number): Promise<ICar> => {
        const res = await fetch(baseUrl + urls.cars.byId(id), {cache: 'no-store'});
        if (!res.ok) throw new Error(`Nie znaleziono auta o id ${id}: ${res.status}`);
        return res.json();
    },

    create: async (car: ICarCreate): Promise<ICar> => {
        const res = await fetch(baseUrl + urls.cars.base, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(car),
        });
        if (!res.ok) throw new Error(`Nie udało się utworzyć auta: ${res.status} ${await res.text()}`);
        return res.json();
    },
};
