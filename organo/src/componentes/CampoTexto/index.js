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
    let valor = ''
    
    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
        

    }

    return (
        <div className = "campo-texto">
            <label>
                {props.label}
                
                </label>

            <input value={valor} onChange= {aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )

}

export default CampoTexto;