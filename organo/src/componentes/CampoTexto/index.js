import './CampoTexto.css';



const CampoTexto = (props) => {
    

    /* teste meu para incluir dinamicamente na página, e dá certo
    function mudarTexto(coisa) {
        document.getElementById('teste1').innerHTML = coisa
    } 
    
    const aoDigitado = (evento) => {
        const blue = evento.target.value
        console.log(blue)
        mudarTexto(blue)     

    }
    
    */ 

    const placeholderModificada = `${props.placeholder}...`
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)

    }

    return (
        <div className = "campo-texto">
            <label>
                {props.label}
                
                </label>

            <input value={props.valor} onChange= {aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )

}

export default CampoTexto;