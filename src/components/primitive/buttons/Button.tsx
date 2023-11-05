import React, { useEffect, useRef } from "react"

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
            const ripple = document.createElement("span")
            const diameter = Math.max(container.clientWidth, container.clientHeight)
            const radius = diameter / 2
            ripple.style.width = ripple.style.height = `${diameter}px`

            const rect = container.getBoundingClientRect()

            ripple.style.left = `${event.clientX - (rect.left + radius)}px`
            ripple.style.top = `${event.clientY - (rect.top + radius)}px`
            ripple.classList.add("relative", "ripple")

            container.appendChild(ripple)

            function removeRipple() {
                ripple.removeEventListener("animationend", removeRipple)
                container.removeChild(ripple)
            }

            ripple.addEventListener("animationend", removeRipple)
        }

        container.addEventListener("click", handleRipple)
        
        return () => {
            container.removeEventListener("click", handleRipple)
        }
    }, [containerRef])

    return (
        <div className={`overflow-hidden relative ${isDisabled ? "disabled" : ""} ${className}`}
             ref={containerRef}
             onClick={onClick}>
            {children}
        </div>
    )
}