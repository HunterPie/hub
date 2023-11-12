import React from "react";

interface TagProps {
    value: string,
    className?: string
}

export const Tag: React.FC<TagProps> = ({
    value,
    className
}) => {
    return (
        <span className={`px-2 py-0.5 bg-gray-0 rounded-md border-white-600 border-thin font-sans text-sm ${className}`}>{value}</span>
    )
}
