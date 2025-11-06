import type { ReactNode } from "react"

interface BackdropProps {
    visible: boolean
    onClick: () => void
    children?: ReactNode
}

export default function Backdrop({
    visible, onClick, children
}: BackdropProps) {



    return (
        <>
            {
                visible &&
                <div className="backdrop" onClick={onClick}>
                    <span onClick={(e) => e.stopPropagation()}>
                        {children}
                    </span>

                </div>
            }
        </>
    )
}