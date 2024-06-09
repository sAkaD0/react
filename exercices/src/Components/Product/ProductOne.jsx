import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'


function ProductOne() {
    const [product, setProduit] = useState([]);
    let id = useParams().id;

    console.log(id);
    useEffect(() => {
        axios.get(
            'http://localhost:3000/api/product/' + id


        ).then((product) => {
            setProduit(product.data.product);
        })
    }, [])
    return (
        <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src={product.mainImage} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                    <br></br>
                    {Number(product.price).toLocaleString('be-FR')}€
                    <br></br>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default ProductOne;
