import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 24 });
myDatabaseClassic.add({ name: 'Maria', age: 30 });
myDatabaseClassic.add({ name: 'Larissa', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);