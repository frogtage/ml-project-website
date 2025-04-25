"use client";

import MyLogo from "@/assets/my-logo.jpg";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(null);
  const activeLink = ["0", "1", "2"];

  return (
    <>
      <div className="header-container">
        <div className="header-logo" onClick={() => setIsActive(null)}>
          <img className="header-image" src={MyLogo.src} alt="Header-Logo" />
          <Link href="/">محمد حسین دوخائی</Link>
        </div>
        <div className="header-links">
          <Link
            href="/resources"
            onClick={() => setIsActive("0")}
            className={
              isActive == activeLink[0] ? "active-header-link" : "header-link"
            }
          >
            منابع
          </Link>
          <Link
            href="/jobs"
            onClick={() => setIsActive("1")}
            className={
              isActive == activeLink[1] ? "active-header-link" : "header-link"
            }
          >
            مشاغل
          </Link>
          <Link
            href="/about"
            onClick={() => setIsActive("2")}
            className={
              isActive == activeLink[2] ? "active-header-link" : "header-link"
            }
          >
            درباره سایت
          </Link>
        </div>
      </div>
    </>
  );
}
