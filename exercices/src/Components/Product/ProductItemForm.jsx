import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../../App';

function ProductItemForm(props) {
  let contexte = useContext(CartContext);
  const cartButton = (event) => {
    event.preventDefault();
    contexte[1]({ type: 'add', product: { id: props.id, name: props.name, price: props.price } });
    console.log(contexte[0]);
  }

  return (
    <>
      <Form onSubmit={cartButton}>
        <Form.Control type="number" placeholder="Nombre Article(s)" />
        <Button variant="primary" type="submit" >
          Ajouter au panier
        </Button>
      </Form>

    </>
  );
}
export default ProductItemForm