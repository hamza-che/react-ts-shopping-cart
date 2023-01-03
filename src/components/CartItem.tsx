import storeItems from "../data/storeItems.json";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);

  if (!item) return null;

  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ height: "75px", width: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="fw-bold">
          {item.name}{" "}
          {quantity > 1 ? (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          ) : null}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
