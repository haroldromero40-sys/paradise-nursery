
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../redux/CartSlice';
import { Link } from 'react-router-dom';
function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    `$${price.toLocaleString('es-CO')} USD`;

  return (
    <div className="cart-page">
      <header className="navbar">
        <a href="/" className="brand">
          🌿 Paradise Nursery
        </a>

        <nav>
          <Link to="/plants">Seguir comprando</Link>
          <Link to="/">Inicio</Link>
           <Link to="/cart">Carrito
            🛒 Carrito ({totalItems})
          </Link>
        </nav>
      </header>

      <main className="cart-container">
        <h1>Tu carrito de compras</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Tu carrito está vacío</h2>

            <p>
              ¡Descubre nuestras plantas y encuentra
              tu favorita!
            </p>

            <a href="/plants" className="continue-button">
              Explorar plantas
            </a>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-item-info">
                    <h2>{item.name}</h2>

                    <p>
                      Precio unitario: {formatPrice(item.price)}
                    </p>

                    <p>
                      Subtotal:{' '}
                      <strong>
                        {formatPrice(item.price * item.quantity)}
                      </strong>
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                        disabled={item.quantity <= 1}
                        aria-label={`Disminuir cantidad de ${item.name}`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                        aria-label={`Aumentar cantidad de ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-button"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <section className="cart-summary">
              <h2>Resumen de la compra</h2>

              <p>
                Total de artículos: <strong>{totalItems}</strong>
              </p>

              <p className="total-price">
                Total: {formatPrice(totalPrice)}
              </p>

              <button
                className="checkout-button"
                onClick={() => alert('¡Próximamente! Gracias por tu compra.')}
              >
                Pagar
              </button>

              <a href="/plants" className="continue-button">
                Continuar comprando
              </a>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
