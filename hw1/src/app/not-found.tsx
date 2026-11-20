import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h2>Not found</h2>
            <Link href="/">Back to home</Link>
        </div>
    );
};

export default NotFound;
