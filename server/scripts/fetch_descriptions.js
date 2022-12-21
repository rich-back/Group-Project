/* you can run this script something like
    node scripts/fetch_descriptions.js) >desc.dat
to get data to put into the seeds file */

const { MongoClient } = require('mongodb');
const process = require('process');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }, (err, client) => {
    if(err){
        console.log(err);
    }

    const db = client.db('elements_table');
    const collection = db.collection('elements');

    // console.log("Got elements collection from database");

    collection
    .find()
    .toArray()
    .then(async (elements) => {
        // console.log(elements.map(e => e.name).join(" "));

        /* https://en.wikipedia.org/w/api.php?action=query&titles=Helium&prop=extracts&format=json&exsentences=10&exlimit=1&formatversion=2&explaintext=1 */

        const fetchPromises = elements.map(element => {
            return fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${element.name}&prop=extracts&format=json&exsentences=5&exlimit=1&formatversion=2&explaintext=1`)
        });
        const jsonPromises = fetchPromises.map(p => p.then(res => res.json()));
        // const dataPromises = jsonPromises.map(p => p.then(json => json.query.pages[0].extract));

        const jsons = await Promise.all(jsonPromises);

        const resultDict = jsons.map((json, index) => {
            const datum = json.query.pages[0].extract;
            if (!datum)
                return;
            if (elements[index].name === 'Mercury')
                return;

            return {
                name: elements[index].name,
                description: datum,
                // pages: json.query.pages,
            }
        });

        console.log(JSON.stringify(resultDict));

        process.exit(0);
    });

});
