import type {Metadata} from "next";
import {carService} from "@/services/api.service";
import {CarComponent} from "@/components/CarComponent";

export const metadata: Metadata = {title: 'All cars'};

export const dynamic = 'force-dynamic';

export default async function CarsPage() {
    const cars = await carService.getAll();

    return (
        <div>
            <h2>All cars ({cars.length})</h2>
            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6}}>
                {cars.map(car => <CarComponent key={car.id} car={car}/>)}
            </ul>
        </div>
    );
}
