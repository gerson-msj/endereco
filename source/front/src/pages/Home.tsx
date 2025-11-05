import { useState, type ReactNode } from "react";

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

    const [modalVisible, setModalVisible] = useState(false)

    const handleClick = () => {
        setModalVisible(prev => !prev)
    }

    return (
        <>
            <nav>
                <a href='/Novo'>Novo</a>
            </nav>
            <h1>Home Page</h1>
            <button type="button" onClick={handleClick}>Alternar Modal</button>
            <Modal visible={modalVisible}>
                <h1>Modal Content!</h1>
            </Modal>
        </>
    );
}