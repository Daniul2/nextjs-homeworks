'use client';

import {useActionState} from "react";
import {createCarAction, CreateCarState} from "@/actions/car.actions";

const initialState: CreateCarState = {};

export const CreateCarForm = () => {
    const [state, formAction, isPending] = useActionState(createCarAction, initialState);

    return (
        <form action={formAction} style={{display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320}}>
            <input type="text" name="brand" placeholder="brand" defaultValue={state.values?.brand}/>
            {state.errors?.brand && <span style={{color: 'red'}}>{state.errors.brand[0]}</span>}

            <input type="number" name="price" placeholder="price" defaultValue={state.values?.price}/>
            {state.errors?.price && <span style={{color: 'red'}}>{state.errors.price[0]}</span>}

            <input type="number" name="year" placeholder="year" defaultValue={state.values?.year}/>
            {state.errors?.year && <span style={{color: 'red'}}>{state.errors.year[0]}</span>}

            {state.errors?.server && <span style={{color: 'red'}}>{state.errors.server[0]}</span>}

            <button type="submit" disabled={isPending}>{isPending ? 'Saving...' : 'Create'}</button>
        </form>
    );
};
