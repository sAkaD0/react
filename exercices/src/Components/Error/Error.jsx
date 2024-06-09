
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Error() {
    return (
        <Alert variant="danger">
            <Alert.Heading>ERREUR 404 !</Alert.Heading>
            <p>
                La page que vous cherchez n'existe pas.
            </p>
            <Link to="/">
                <Button variant="primary">
                    Go back to Home
                </Button>
            </Link>
        </Alert>

    )
}

export default Error;