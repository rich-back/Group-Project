const baseURL = 'http://localhost:9000/api/elements/';

export const getElements = () => {
    return fetch(baseURL)
        .then(res => res.json())
}
export const getElement = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())
}

export const postElement = (payload) => {
    return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
}

export const deleteElement = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const putElement = (id, payload) => {
    return fetch(baseURL + id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
}