const accountRepository = require("../repository/accountRepository");

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
    return jwt.sign({ username: username }, secret);
}

module.exports = {canUserLogin:canUserLogin};