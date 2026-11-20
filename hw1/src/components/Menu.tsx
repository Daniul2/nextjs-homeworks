'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {href: '/', label: 'home'},
    {href: '/users', label: 'users'},
    {href: '/posts', label: 'posts'},
    {href: '/comments', label: 'comments'},
];

export const Menu = () => {
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

    return (
        <nav>
            <ul className="menu">
                {links.map(({href, label}) => (
                    <li key={href}>
                        <Link href={href} className={isActive(href) ? 'active' : ''}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr/>
        </nav>
    );
};
