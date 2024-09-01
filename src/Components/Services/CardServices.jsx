import {Col} from 'react-bootstrap'

const CardServices = ({imagen,tipo,descripcion,numero,dataAos}) => {
  return (
    <Col className='col-card' data-aos={dataAos} >
        
    <div className='card-services'>
    <img src={imagen} className='imagen-services'></img>
    <h3 className='services-numero'>{numero}</h3>
    <h4 className='services-tipo'>{tipo}</h4>
    <p className='services-descripcion'>{descripcion}</p>

    </div>
    </Col>
  )
}

export default CardServices