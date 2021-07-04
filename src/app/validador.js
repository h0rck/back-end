export default () => {
    const val = {};


/// retirar essa função e add select nas queries
val.clearDivida = (divida) =>{
    return divida.map(e => {
        return{
            id_divida:  e.id_divida,
            id_usuario: e.id_usuario,
            motivo:     e.motivo,
            data:       e.data,
            valor:      e.valor
        }
    });

   
}

return val


}