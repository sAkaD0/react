import ProductItem from "./ProductItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../index.css";

function Product({ product }) {
    return (
        <>
            <Row xs={2} md={2} lg={2} xl={2} className="g-4">
                {
                    product.map((element, index) => <Col key={index}><ProductItem name={element.name} price={element.priceAfterDiscount} description={element.description} category={element.category} mainImage={element.mainImage} /></Col>
                    )}
            </Row>
        </>
    );
}


export default Product