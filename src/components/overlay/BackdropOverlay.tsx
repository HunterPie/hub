interface BackdropOverlayProps {
    isVisible: boolean
    onClick: () => void
}

export const BackdropOverlay: React.FC<BackdropOverlayProps> = ({
    isVisible,
    onClick
}) => {
    return (
        <div className={`flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center items-start sm:items-center bg-gray-900 transition-opacity ${isVisible ? "opacity-80 w-full" : "opacity-0 w-0"}`}
             onClick={onClick}>
        </div>
    )
}