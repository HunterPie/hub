interface KbdProps {
    text: string
}

export const Kbd: React.FC<KbdProps> = ({
    text
}) => {
    return (
        <kbd className="self-center px-2 py-1 rounded-md font-sans text-xs bg-gray-0 text-white-200 font-medium">{text}</kbd>
    )
}