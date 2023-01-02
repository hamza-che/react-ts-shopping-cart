import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 1;
  return (
    <Card>
      <Card.Img
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
        variant="top"
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <span className="fs-2">{name}</span>
          <span className="text-muted ms-3">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity ? (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button>+</Button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <Button>-</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          ) : (
            <Button className="w-100">+ Add to cart</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
