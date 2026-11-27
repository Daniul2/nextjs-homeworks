
'use server';

import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {z} from "zod";
import {carValidator} from "@/validators/car.validator";
import {carService} from "@/services/api.service";

export type CreateCarState = {
    errors?: Partial<Record<'brand' | 'price' | 'year' | 'server', string[]>>;
    values?: { brand: string; price: string; year: string };
};

export const createCarAction = async (_prev: CreateCarState, formData: FormData): Promise<CreateCarState> => {
    const values = {
        brand: String(formData.get('brand') ?? ''),
        price: String(formData.get('price') ?? ''),
        year: String(formData.get('year') ?? ''),
    };

    const result = carValidator.safeParse(values);
    if (!result.success) {
        return {errors: z.flattenError(result.error).fieldErrors, values};
    }

    try {
        await carService.create(result.data);
    } catch (e) {
        return {errors: {server: [(e as Error).message]}, values};
    }

    revalidatePath('/cars');
    redirect('/cars');
};
