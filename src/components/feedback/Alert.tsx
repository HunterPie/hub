import React from "react";

interface AlertProps {
    icon: any
    children?: any
    className?: string
}

export const Alert: React.FC<AlertProps> = ({
    icon,
    children,
    className
}) => {
    return (
        <div className={`flex flex-row ${className}`}>
            <div className="h-5 w-5 m-2">{icon}</div>
            <div className="self-center">{children}</div>
        </div>
    )
}