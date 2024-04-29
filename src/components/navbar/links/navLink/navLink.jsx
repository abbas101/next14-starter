"use client";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ item }) => {
    const pathName = usePathname();
    
    // Check if item.path is defined before rendering Link
    if (!item.path) {
        return null; // or render something else, depending on your use case
    }

    return (
        <div className={styles.container}>
            <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
                {item.title}
            </Link>
        </div>
    );
}

export default NavLink;
