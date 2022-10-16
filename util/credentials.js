let bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);


export function hashPassword(pwd) {
    let hash = bcrypt.hashSync(pwd, salt);
    return hash;
}

export function comparePassword(pwd, hash) {
    return bcrypt.compareSync(pwd, hash);
}
