import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductItemForm() {

  return (
    <>
      <br></br>
      <Form.Control type="number" placeholder="Nombre Article(s)" />
      <br></br>
      <Button variant="primary" type="submit">
        Ajouter au panier
      </Button>

    </>
  );
}
export default ProductItemForm