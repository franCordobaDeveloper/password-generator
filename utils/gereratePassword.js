
const gereratePassword = ( length, chars ) => {
    
    let password = '';
    for(let i = 0; i < length; i++ ) {
        password += chars.charAt( Math.floor(Math.random( ) * chars.length ) );
    }
    
    return password;
}



module.exports = gereratePassword;