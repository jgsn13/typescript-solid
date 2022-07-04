type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  public get items(): Readonly<CartItem[]> {
    return this._items;
  }

  public get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public get total(): number {
    return +this._items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }

  public checkout(): void {
    if (this.isEmpty) {
      console.log('Your cart is empty!');
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Your order of ${this.total} has been received!`);
    this.saveOrder();
    this.clear();
  }

  public get isEmpty(): boolean {
    return this._items.length === 0;
  }

  public sendMessage(msg: string): void {
    console.log(`Message sent: ${msg}`);
  }

  public saveOrder(): void {
    console.log('Order saved successfully!');
  }

  public clear(): void {
    console.log('Shopping cart has been cleaned...');
    this._items.length = 0;
  }
}

const shoppintCart = new ShoppingCart();

shoppintCart.addItem({ name: 'T-shirt', price: 49.9 });
shoppintCart.addItem({ name: 'Notebook', price: 9.9 });
shoppintCart.addItem({ name: 'Pencil', price: 1.59 });

console.log(shoppintCart.items);
console.log(shoppintCart.total);

console.log(shoppintCart.orderStatus);
shoppintCart.checkout();
console.log(shoppintCart.orderStatus);
