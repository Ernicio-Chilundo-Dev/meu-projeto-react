import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () =>{
    const {id} = useParams();
    // 6 - redirect
    const navigate = useNavigate();

    const handleContact = () => {
        console.log("Contato Enviado")
        return navigate("/")
    }
    return <div>
        <h1>Exibido mais informacoes de contacto: {id}</h1>
        <button onClick={handleContact}>Enviar Mensagem</button>
    </div>;
};

export default ContactDetails;