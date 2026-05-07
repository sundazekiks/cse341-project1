

const generateContactModel = (firstName, lastName, email, favoriteColor, birthday) => {
    return {
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday
    }
}

module.exports = generateContactModel;