"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { clsx } from "clsx";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <svg width="136" height="16" className={styles.logoSvg}>
            <use href="/Logo.svg" />
          </svg>
        </Link>

        <div className={styles.links}>
          <Link
            href="/"
            className={clsx(styles.link, pathname === "/" && styles.active)}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={clsx(
              styles.link,
              pathname.startsWith("/catalog") && styles.active
            )}
          >
            Catalog
          </Link>
        </div>
      </nav>
    </header>
  );
};
