import { BackdropOverlay } from "../overlay/BackdropOverlay"

interface SearchModalProps {
    isOpen: boolean,
    onClose: () => void
}

export const SearchModal: React.FC<SearchModalProps> = ({
    isOpen,
    onClose
}) => {


    return (
        <div>
            <BackdropOverlay onClick={onClose}
                             isVisible={isOpen}/>
        </div>
    )
}