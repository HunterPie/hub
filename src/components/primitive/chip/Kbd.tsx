interface KbdProps {
    text: string,
    className: string
}

export const Kbd: React.FC<KbdProps> = ({
    text,
    className
}) => {
    return (
        <kbd className={`self-center px-2 py-1 rounded-md font-sans text-xs bg-gray-0 text-white-200 font-medium ${className}`}>{text}</kbd>
    )
}