import React from "react";
import "./Button.scss";
import Link from "next/link";

function Button({text, href}:{text: string, href: string}) {
  return (
    <Link href={href} className="btn">{text}</Link>
  )
}

export default Button