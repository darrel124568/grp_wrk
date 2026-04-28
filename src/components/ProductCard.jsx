export default function ProductCard({product}) {
    const {name, catgeory, price} = product
  return (
    <div className="card col-3 m-1">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {catgeory}
        </p>
        <p>Ksh.{price}</p>
        <a href="#" className="btn btn-primary">
          Add To Cart
        </a>
      </div>
    </div>
  );
}
