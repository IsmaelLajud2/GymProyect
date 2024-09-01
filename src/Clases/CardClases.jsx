
import {Col} from 'react-bootstrap'
const CardClases = ({imagen,descripcion,coach,index}) => {
  return (
    <Col key={index} className='clases-col'>
    <div className='clases-card'>
    <img src={imagen} alt='bike' className='imagen-clases'/>
    <h4 className='h4-clases'>{descripcion}</h4>
    <p  className='p-clases'>{coach}</p>
    </div>
   
    </Col>
  )
}

export default CardClases