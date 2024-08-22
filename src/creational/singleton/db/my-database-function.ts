import { User } from "../interfaces/users";

export const MyDatabaseFunction = (() => {
  const users: User[] = [];

  return {
    add(user: User): void {
      users.push(user);
    },
  
    remove(index: number): void {
      users.splice(index, 1);
    },
  
    show(): void {
      for (const user of users) {
        console.log(user);
      }
    }
  }
})();
