const jwt = require('jsonwebtoken')

const auth = async(req, res, next) => {
    try {
        const token = await request.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(
            token,
            process.env.JWT_SECRET
          );
          const user = await decodedToken;
          request.user = user;
          next();
    } catch (error) {
        res.status(401).json({
            error: new Error("Invalid request!"),
          });
    }

}

module.exports = auth