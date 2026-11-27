import Link from "next/link";

export const Menu = () => {
    return (
        <nav style={{display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #ccc'}}>
            <Link href={'/'}>Home</Link>
            <Link href={'/cars'}>Cars</Link>
            <Link href={'/cars/create'}>Create car</Link>
        </nav>
    );
};
