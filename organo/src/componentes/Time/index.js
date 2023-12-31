import './Time.css'

const Time = (props) => {
    const css1 = { borderColor: props.corPrimaria }
    const css2 = { backgroundColor: props.corSecundaria }
    

    return (
        <section className="time" style={css2}>
            <h3 style={css1}>
                {props.nome}
            </h3>
        </section>
    )
}

export default Time