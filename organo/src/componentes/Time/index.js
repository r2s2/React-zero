import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
    const css1 = { borderColor: props.corPrimaria }
    const css2 = { backgroundColor: props.corSecundaria }
    

    return (
        <section className="time" style={css2}>
            <h3 style={css1}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador  => <Colaborador 
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem}/> )}

            </div>
            

          
        </section>
    )
}

export default Time