interface KbdProps {
    text: string
}

export const Kbd: React.FC<KbdProps> = ({
    text
}) => {
    return (
        <kbd className="self-center px-2 py-1 rounded-md font-sans text-sm bg-gray-0">{text}</kbd>
    )
}