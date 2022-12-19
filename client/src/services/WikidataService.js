const sparqlBaseURL = 'https://query.wikidata.org/sparql';

/* NB.  This doesn't escape atomicNumber itself */
const elementInformationSPARQL = (atomicNumber) => `
SELECT ?chemical_element ?chemical_elementLabel ?symbol ?image ?atomicNumber WHERE {
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
    ?chemical_element wdt:P31 wd:Q11344.
    ?chemical_element wdt:P246 ?symbol.
    ?chemical_element wdt:P18 ?image.
      ?chemical_element wdt:P1086 ?atomicNumber.
  #  FILTER(STR(?symbol) = "Mn")
    FILTER (?atomicNumber="${atomicNumber}"^^xsd:decimal)
  }
  LIMIT 100
`;

export const getElementInformation = (atomicNumber) => {
    const sparql = elementInformationSPARQL(atomicNumber);
    const completeURL = new URL(sparqlBaseURL);
    completeURL.searchParams.set('query', sparql);

    return fetch(completeURL, {
            method: 'GET',
            headers: { 'Accept': 'application/sparql-results+json' }
        })
        .then(res => res.json())
        .then(data => {
            const result = {};
            for (const key in data.results.bindings[0]) {
                result[key] = data.results.bindings[0][key].value;
            }
            return result;
        });
}