async function isAdmin(request, response, next){
    const user = request.user; 

    if (user && user.role === 'Admin') {
        return next(); // Proceed if user is an admin
    }

    return response.status(403).json({
        message: 'Access denied. Admin role required.',
    });
};

module.exports = {
    isAdmin
}