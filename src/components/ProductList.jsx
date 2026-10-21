
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const plants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 25,
    category: 'Plantas tropicales',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Palma Areca',
    price: 30,
    category: 'Plantas tropicales',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Calathea',
    price: 22,
    category: 'Plantas tropicales',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Ficus Elastica',
    price: 28,
    category: 'Plantas tropicales',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    name: 'Pothos',
    price: 15,
    category: 'Plantas colgantes',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    name: 'Philodendron',
    price: 20,
    category: 'Plantas colgantes',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 7,
    name: 'Hiedra Inglesa',
    price: 18,
    category: 'Plantas colgantes',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 8,
    name: 'Ceropegia',
    price: 24,
    category: 'Plantas colgantes',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 9,
    name: 'Sansevieria',
    price: 19,
    category: 'Plantas resistentes',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b8b?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 10,
    name: 'Aloe Vera',
    price: 12,
    category: 'Plantas resistentes',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 11,
    name: 'Cactus',
    price: 10,
    category: 'Plantas resistentes',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 12,
    name: 'Haworthia',
    price: 14,
    category: 'Plantas resistentes',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="catalog-page">
      <header className="navbar">
        <a href="/" className="brand">
          🌿 Paradise Nursery
        </a>

        <nav>
<Link to="/">Inicio</Link>
<Link to="/plants">Plantas</Link>
<Link to="/cart">
  🛒 Carrito ({cartItems.reduce((total, item) => total + item.quantity, 0)})
</Link>

        </nav>
      </header>

      <main className="catalog-container">
        <h1>Nuestras plantas</h1>
        <p className="catalog-intro">
          Encuentra la planta perfecta para llenar tu hogar de vida.
        </p>

        {categories.map((category) => (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <article className="plant-card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />

                      <div className="plant-info">
                        <h3>{plant.name}</h3>
                        <p className="plant-price">
                          ${plant.price.toLocaleString('es-CO')} USD
                        </p>

                        <button
                          disabled={isAdded}
                          onClick={() => dispatch(addItem(plant))}
                        >
                          {isAdded ? 'Agregada ✓' : 'Agregar al carrito'}
                        </button>
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;

