'use client'

import React from "react";
import {Button} from "@/components/primitive/buttons/Button";

interface LinkButtonProps {
    href: string
    children?: any
    className?: string
}

export const LinkButton: React.FC<LinkButtonProps> = ({
    href,
    children,
    className
}) => {

    return (
        <a href={href}
            className="w-fit">
            <Button onClick={() => {}} className={className}>{children}</Button>
        </a>
    )
}