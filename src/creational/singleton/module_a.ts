import { MyDatabaseFunction } from './db/my-database-function'

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Eduardo', age: 24 });
myDatabaseClassic.add({ name: 'Joana', age: 30 });
myDatabaseClassic.add({ name: 'Gabriel', age: 25 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

export { myDatabaseClassic };