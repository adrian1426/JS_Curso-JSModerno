export class UserModel {
  constructor(user) {
    this.id = user.id;
    this.isActive = user.isActive;
    this.balance = user.balance;
    this.avatar = user.avatar;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.gender = user.gender;
  }
}