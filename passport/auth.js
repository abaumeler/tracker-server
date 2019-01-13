const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new GoogleStrategy({
        clientID: '448910716445-l600io9jtdh9rn39g1la32b13dnqsvee.apps.googleusercontent.com',
        clientSecret: 'MTQtf-x5PCXi_IdEbyRnUb0w',
        callbackURL: 'http://localhost:3500/auth/google/callback'
    },
    (token, refreshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: token
        });
    }));
};
