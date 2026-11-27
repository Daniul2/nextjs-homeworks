import {ICar} from "@/models/ICar";

export const CarComponent = ({car}: { car: ICar }) => {
    return (
        <li style={{padding: 8, border: '1px solid #ddd', borderRadius: 6}}>
            #{car.id} — <b>{car.brand}</b>, {car.year}, {car.price} $
        </li>
    );
};
