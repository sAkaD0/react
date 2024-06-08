import ProductItem from "./ProductItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../index.css";
import Spinner from "../spinner/Spinner.jsx";
import { useState } from 'react';
import ProductItemForm from "./ProductItemForm.jsx";

function Product({ product }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    return (
        <>

            {loading ? (
                <Spinner />
            ) : error ? (
                <div style={{ color: "red" }}>Error: {error}</div>
            ) : (
                <Row xs={2} md={2} lg={2} xl={2} className="g-4">
                    {
                        product.map((element, index) => <Col key={index}><ProductItem name={element.name} price={element.priceAfterDiscount} description={element.description} category={element.category} mainImage={element.mainImage} /><ProductItemForm name={element.name} price={element.priceAfterDiscount} id={element.id} /></Col>
                        )}
                </Row>
            )}
        </>);
}


export default Product