const authAdmin = require('./authAdmin');
const authCollege = require('./authCollege');

const auth = async (req, res, next) => {
    if(req.body.auth==='admin') authAdmin(req, res, next);
    else if(req.body.auth==='college') authCollege(req, res, next);
    else res.send('404');
}

module.exports = auth;