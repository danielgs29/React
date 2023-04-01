const estilo={
    color:"red"
}

function  Card(props){
    return(
        <div>
            <h2 style={estilo}>{props.h2}</h2>
            <h3>{props.h3} </h3>
        </div>
    );
}

export default Card;