import ProductCard from "./ProductCard";

export default function ProductList({products}){

    return(
        <div className="row">
            {
                products.map((product, index)=> (<ProductCard key={index} product={product}/>))
            }
        </div>
    )
}