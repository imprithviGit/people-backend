"use strict";
const connection = require('../dbConnection');

module.exports = {
    getUserDetails: (req, res) => {
        try {
            const query = 'SELECT * FROM UserDetails';

            connection.query(query, (err, data) => {
                if (err) {
                    console.error('Error executing SQL query:', err);
                    res.status(400).json({ error: 'Error executing SQL query' });
                    return;
                }
                res.status(200).send(data);
            });
        } catch (err) {
            console.error(err);
            res.status(400).send("Something Went Wrong");
        }
    },

    addOrUpdateUserDetails: (req,res) =>{
      try {
        const { fullName, contactNumber, gender, location, dob, stateOfBirth, nationality, aadharNo, panNo } = req.body;

        const query = `
            INSERT INTO UserDetails 
            (fullName, contactNumber, gender, location, dob, stateOfBirth, nationality, aadharNo, panNo) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        connection.query(query, [fullName, contactNumber, gender, location, dob, stateOfBirth, nationality, aadharNo, panNo], (err, result) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                res.status(400).json({ error: 'Error executing SQL query' });
                return;
            }
            console.log('User inserted successfully');
            res.status(200).send('User inserted successfully');
        });
    } catch (err) {
        console.error(err);
        res.status(400).send("Something Went Wrong");
    }
}
};
