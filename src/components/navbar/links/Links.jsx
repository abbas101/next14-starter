import Link from "next/link";
import NavLink from '@/components/navbar/links/navLink/navLink'
import styles from "./links.module.css"
const Links = () => {
    const links =[
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Admin",
            path: "/admin",
        },
        {
            title: "Logout",
            path: "/logout",
        },
    ];
    return (
        <div className={styles.links}>
           {links.map((link =>(
            <NavLink item={link} key={link.title}/>
           ) ))} 
        </div>
    )
}

export default Links