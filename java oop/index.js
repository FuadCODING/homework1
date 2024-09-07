class Person {
    constructor(company, address) {
        this.company = company;
        this.address = address;
    }
}

class Admin extends Person {
    constructor(company, address) {
        super(company, address);
        this.users = [];
    }

    addUser(user) {
        if (user instanceof User) {
            this.users.push(user);
            console.log("User added.");
        } else {
            console.log("Only instances of User can be added.");
        }
    }

    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
            console.log("User removed.");
        } else {
            console.log("User not found.");
        }
    }

    viewUsers() {
        if (this.users.length === 0) {
            console.log("No users to display.");
        } else {
            console.log("Users:");
            this.users.forEach((user, index) => {
                console.log(`${index + 1}: ${user.name}`);
            });
        }
    }
}

class User extends Person {
    constructor(company, address, name) {
        super(company, address);
        this.name = name;
    }

    viewUsers(admin) {
        if (admin instanceof Admin) {
            admin.viewUsers();
        } else {
            console.log("You do not have permission to view users.");
        }
    }
}

const admin = new Admin("TechCorp", "123 Tech Lane");
const user1 = new User("TechCorp", "456 User St", "Alice");
const user2 = new User("TechCorp", "789 User Ave", "Bob");

admin.addUser(user1);
admin.addUser(user2);
admin.viewUsers(); 
admin.removeUser(user1);
admin.viewUsers(); 
