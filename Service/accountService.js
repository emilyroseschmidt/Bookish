const accountRepository = require("../repository/accountRepository");
const config = require("../config");

function canUserLogin(username,password){
accountRepository.canUserLogin(username, password)
        .then((canLogin) => {
            if (canLogin) {
                return createTokenForUser(username);
                }
                return null
            });
        }
function createTokenForUser(username) {
    return jwt.sign({ username: username }, config.secret);
}

module.exports = {canUserLogin:canUserLogin};