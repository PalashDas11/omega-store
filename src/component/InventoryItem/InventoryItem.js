import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InventoryItem = ({ inventory }) => {
    const { name, img, price, description, supplier } = inventory
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
                    
                    <Card.Title className='text-danger'>${price}</Card.Title>
                    <Link to ="/" className="d-block w-75 m-4 mx-auto text-center custom-btn">Update</Link>
                 
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryItem;