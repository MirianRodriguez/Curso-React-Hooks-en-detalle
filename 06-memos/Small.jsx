import {memo} from 'react'

//memo evita que el componente se vuelva a renderizar si las props no cambian
export const Small = memo(({value}) => {

    //sin usar memo, este console.log y cualquier otra operación se volvería a hacer cuando cambie el componente padre
    //no queremos esto porque se sobrecarga en vano
    //Es un problema con componentes más grandes
    console.log('Hola de nuevo')
  return (
    <small>{value}</small>
  )
})
