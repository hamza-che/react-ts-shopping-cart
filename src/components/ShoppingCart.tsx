import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import CartItem from "./CartItem";
import storeItems from "../data/storeItems.json";
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return (
              <CartItem key={item.id} id={item.id} quantity={item.quantity} />
            );
          })}
          {cartItems.length ? (
            <div className="ms-auto fw-bold fs-4">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, currItem) => {
                  const item = storeItems.find((i) => i.id === currItem.id);
                  return total + (item?.price || 0) * currItem.quantity;
                }, 0)
              )}
            </div>
          ) : (
            <p className="fw-bold fs-5 text-center">Cart is empty!</p>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
