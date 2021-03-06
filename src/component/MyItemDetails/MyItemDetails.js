import React from 'react';
import { Card } from 'react-bootstrap';

const MyItemDetails = ({myItem, handleDelete}) => {
    // console.log(myItem);
    const { name, img, price, description, supplier, quantity, } = myItem;
    return (
        <div className='col-sm-12  col-md-4 g-3 '>
        <Card style={{ width: '100%', height:'100%' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                
                    <h6>Supplier:{supplier}</h6>
                    <h6>Quantity:{quantity}</h6>
                
                <Card.Title className='text-danger'>${price}</Card.Title>
                <button className="d-block w-75 m-4 mx-auto text-center custom-btn"onClick={ handleDelete}>Delete</button>
             
            </Card.Body>
        </Card>
    </div>
    );
};

export default MyItemDetails;