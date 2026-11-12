
export interface CardInterface {
    listing_id: number;
    url: string;
    MainImage: {
        url_570xN: string;
    };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

interface ListingProps {
    item: CardInterface[];
}

function Listing({ item }:ListingProps) {
    const currencySymbols: Record<string, string>= {
    USD: "$",
    EUR: "€",
    GBP: "£",
};
console.log(item);

    return(
        <>
        
            {item.map(items =>(
        <a href={items.url} key={items.listing_id}>
            <div className="product-card" >
                <img src={items.MainImage.url_570xN} alt="Butterfly Cotton Fabric" className="product-image"/>
                <div className="product-info">
                    <h3 className="product-title">{items.title}</h3>
                    <div className="price-container">
                        <div className="product-price">{currencySymbols[items.currency_code]
                                ? `${currencySymbols[items.currency_code]}${items.price}`
                                : `${items.currency_code}${items.price}`
                            }</div>
                        <span className={`stock-badge ${items.quantity <= 10 ? "stock-low" :(items.quantity >= 20 ? "stock-high" : "stock-medium")}`}>{items.quantity} left</span>
                    </div>
                </div>
            </div>
        </a>
            ))}
    </>
        
    )
}

export default Listing;