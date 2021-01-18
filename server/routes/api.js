const express = require('express');
const router = express.Router();
const axios = require('axios');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:1234@localhost/crm_project'); 

// const data = require('./../../data/data.json');

router.get('/dataList', async function(req, res) {
    const query = `
    SELECT
        id,
        first_name AS firstName, 
        last_name AS lastName,
        country.name AS country, 
        email,
        first_contact AS firstContact, 
        sold, 
        type AS emailType, 
        owner.name AS owner
    FROM 
        client, country, owner, email_type AS e_t
    WHERE
        client.email_type_id = e_t.e_t_id AND
        owner.o_id = client.owner_id AND
        country.c_id = client.country_id
    ORDER BY id`;
    const results = await sequelize.query(query);
    res.send(results[0]);
})

router.get('/clients_owners', async function(req, res) {
    const query = `SELECT
    id,
    first_name AS firstName, 
    last_name AS lastName,
    owner.name AS owner
FROM 
    client, owner
WHERE
    owner.o_id = client.owner_id
ORDER BY id`;
    const results = await sequelize.query(query);
    res.send(results[0]);
})

router.get('/owners', async function(req, res) {
    const query = `SELECT * FROM owner`
    const results = await sequelize.query(query);
    res.send(results[0]);
})

router.get('/countries', async function(req, res) {
    const query = `SELECT * FROM country`
    const results = await sequelize.query(query);
    res.send(results[0]);
})

router.post('/client', async function(req, res) {
    const c = req.body;
    const query = `
    INSERT INTO client
    VALUES (null, '${c.firstName}', '${c.lastName}', '${c.email}', '${c.date}', false, 5, ${c.owner}, ${c.country});`;
    await sequelize.query(query);
    res.end();
})

router.put('/client/:id/:firstName/:lastName/:country', async function(req, res) {
    const countryData = await sequelize.query(`SELECT c_id FROM country WHERE name = '${req.params.country}'`);
    const countryId = countryData[0][0].c_id || null;
    const query = `
    UPDATE client
    SET 
        first_name = '${req.params.firstName}',
        last_name = '${req.params.lastName}',
        country_id = ${countryId}
    WHERE id = ${req.params.id};`;
    await sequelize.query(query);
    res.end();
})

router.put('/owner/:id/:owner', async function(req, res) {
    const query = `
    UPDATE client
    SET 
        owner_id = ${req.params.owner}
    WHERE id = ${req.params.id};`;
    await sequelize.query(query);
    res.end();
})

router.put('/email_type/:id/:type', async function(req, res) {
    const query = `
    UPDATE client
    SET 
        email_type_id = '${req.params.type}'
    WHERE id = ${req.params.id};`;
    await sequelize.query(query);
    res.end();
})

router.put('/sold/:id', async function(req, res) {
    const query = `
    UPDATE client
    SET 
        sold = true
    WHERE id = ${req.params.id};`;
    await sequelize.query(query);
    res.end();
})


module.exports = router;