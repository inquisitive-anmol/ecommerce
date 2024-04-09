const JWT = require("jsonwebtoken");

const secret = "$superIronTonyMan2345@#";


function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token, secret);
    return payload;
}


// passport google authentication

function passportGoogleAuthentication() {
    const GoogleStrategy = require('passport-google-oauth20').Strategy;

    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://www.example.com/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    ));
}

module.exports = {
    createTokenForUser,
    validateToken,
    passportGoogleAuthentication,
}