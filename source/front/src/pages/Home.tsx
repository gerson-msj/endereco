import { useState, type ReactNode } from "react";
import Backdrop from "./components/backdrop";

interface ModalParam {
    visible: boolean
    children: ReactNode
}

function Modal({ visible, children }: ModalParam) {
    return (
        <>
            {visible && <div>
                Modal
                <div>
                    Backdrop
                    <div>
                        Box
                        {children}
                    </div>
                </div>
            </div>}
        </>
    )


}

export default function Home() {

    // const [modalVisible, setModalVisible] = useState(false)
    const [backdropVisible, setBackdropVisible] = useState(false)

    const handleClick = () => {
        setBackdropVisible(prev => !prev)
    }

    const handleBackdrop = () => {
        setBackdropVisible(false)
    }

    return (
        <>
            <nav>
                <a href='/Novo'>Novo</a>
            </nav>
            <h1>Home Page</h1>
            <button type="button" onClick={handleClick}>Alternar Backdrop</button>
            <Backdrop visible={backdropVisible} onClick={handleBackdrop}>
                <div style={{ backgroundColor: "red" }}>
                    <h1>Backdrop</h1>
                </div>

            </Backdrop>

            {/* <Modal visible={modalVisible}>
                <h1>Modal Content!</h1>
            </Modal> */}
        </>
    );
}