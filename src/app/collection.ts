class Collection<T> {
  private items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  getItem(index: number): T {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  remove(index: number): void {
    this.items.splice(index, 1);
  }

  replace(index:number, item: T): void {
    if (index >= 0 && index < this.items.length){
      this.items[index] = item;
    }
  }
}

const stringCollection: Collection<string> = new Collection<string>(['one','two','three']);
const numberCollection: Collection<number> = new Collection<number>([1, 2, 3]);