/* ===================================== DTO ===================================== */
class userDTO {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.address = user.address;
        this.age = user.age;
        this.phone = user.phone;
        this.userImg = user.userImg;
        this.timestamp = user.timestamp;
    }
}
/* =============================== EXPORTED MODULES ============================== */
export default userDTO;