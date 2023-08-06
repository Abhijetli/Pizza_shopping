// Product model(Blueprint)
//pizza object= id name price desc rating image
class Product{
    constructor(id, name, description, price, url){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.url=url;
        this.isAddedInCart = false;
    }
}
export default Product