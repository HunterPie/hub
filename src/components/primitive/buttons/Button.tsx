import { useEffect, useRef } from "react"

interface ButtonProps {
    children?: any
    className?: string
    isDisabled?: boolean
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    isDisabled,
    onClick
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const container = containerRef.current!;
        
        function handleRipple(event: MouseEvent) {
            const previousEffect = container.getElementsByClassName("ripple");

            if (previousEffect.length >= 5) {
                previousEffect[0].remove();
            }

            const ripple = document.createElement("span");
            const diameter = Math.max(container.clientWidth, container.clientHeight);
            const radius = diameter / 2;
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${event.clientX - (container.offsetLeft + radius)}px`;
            ripple.style.top = `${event.clientY - (container.offsetTop + radius)}px`;
            ripple.classList.add("ripple");

            container.appendChild(ripple);
        }

        container.addEventListener("click", handleRipple)
        
        return () => {
            container.removeEventListener("click", handleRipple)
        }
    }, [containerRef])

    return (
        <div className={`overflow-hidden relative ${className}`}
             ref={containerRef}
             onClick={onClick}
             disabled={isDisabled}>
            {children}
        </div>
    )
}