import Boton from "./Boton";
function Home ({children, saludo}) {  // Se crea la funcion

    return (
        <>
            <h2>Este es el Home {saludo}</h2> 
            <Boton estilo="rojo" texto="registrar usuario"/>  
            {children}
        </>
        ) 
}
export default Home; //Para poder utilizarla en otro lado, se exporta.
// suenore exportar las funciones

// Aqui solo se trabajará sobre HOME. 
// Si deseo otro componente se crea otra carpeta