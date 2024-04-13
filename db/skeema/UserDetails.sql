CREATE TABLE UserDetails (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255),
    contactNumber VARCHAR(20),
    gender ENUM('Male', 'Female', 'Other'),
    location VARCHAR(255),
    dob DATE,
    stateOfBirth VARCHAR(255),
    nationality VARCHAR(255),
    aadharNo VARCHAR(20),
    panNo VARCHAR(10),
    otherGovtIds VARCHAR(255),
    geoTags VARCHAR(255),
    userRating FLOAT,
    userImage BLOB
);
