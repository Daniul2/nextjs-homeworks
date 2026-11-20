import Link from "next/link";

type Item = { id: number; label: string };

type Props = {
    basePath: string;
    items: Item[];
};

export const ItemsList = ({basePath, items}: Props) => {
    return (
        <ul className="list">
            {items.map(({id, label}) => (
                <li key={id}>
                    <Link href={`${basePath}/${id}`}>{id}. {label}</Link>
                </li>
            ))}
        </ul>
    );
};
