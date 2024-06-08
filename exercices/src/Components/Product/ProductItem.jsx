import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';


function ProductItem(props) {
        return (
        <Card style={{ width: '75%' }}>
            <Card.Img variant="top" src={props.mainImage} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                    <br></br>
                    {Number(props.price).toLocaleString('be-FR')}€
                    <br></br>
                    <ProductItemForm />
                </Card.Text>
            </Card.Body>
        </Card>
        );
}

        export default ProductItem