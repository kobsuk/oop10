export{}
class Product{
    constructor(public name: string,public price: number,public quantity: number){}
    getsubtotal(): number{
        return this.price*this.quantity;
    }
}
class Order{
    private products: Product[] = [];
    addproduct(product: Product){
        this.products.push(product);
        console.log(`${product.name}: ${product.price} บาท x ${product.quantity} ชิ้น`)
    }
    calculatetotal(): number{
        let total: number = 0;
        for(const p of this.products){
            total += p.getsubtotal();
        }
        return total;
    }
    calculatediscount(percent: number): number{
        return this.calculatetotal()*percent/100;
    }
    caculatenettotal(percent: number){
        return this.calculatetotal()-this.calculatediscount(disc);
    }
}

const order = new Order();
const prod1 = new Product(`Laptop`,25000,2);
const prod2 = new Product(`Mouse`,200,10);
const pord3 = new Product(`Scanner`,12000,3)
order.addproduct(prod1);
order.addproduct(prod2);
order.addproduct(pord3);
order.calculatetotal();
const disc = 10;
console.log(`รวมเป็นเงินทั้งหมด: ${order.calculatetotal()} บาท`)
console.log(`ส่วนลด${disc}% เป็นเงิน: ${order.calculatediscount(disc)} บาท`)
console.log(`ชำระเงิน: ${order.calculatetotal} บาท`)