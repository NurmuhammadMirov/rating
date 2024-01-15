export default function Products() {
  const products = ['Learning React', 'Pro React', 'Beginning React'];
  const listProducts = products.map(product => <li key={product.toString()}>{product}</li>);

  return (
    <>
        <ul>
          {listProducts}
        </ul>
    </>
  )
}