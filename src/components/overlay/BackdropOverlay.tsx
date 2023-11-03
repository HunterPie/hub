interface BackdropOverlayProps {
    isVisible: boolean
    onClick: () => void
}

export const BackdropOverlay: React.FC<BackdropOverlayProps> = ({
    isVisible,
    onClick
}) => {
    return (
        <div className={`fixed z-40 inset-0 overflow-x-auto justify-center items-start sm:items-center bg-gray-700 transition-opacity ${isVisible ? "opacity-50 w-full" : "opacity-0 w-0"}`}
             onClick={onClick}>
        </div>
    )
}