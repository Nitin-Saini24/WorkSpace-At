// Fetch data from API and store in IndexedDB
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        const request = indexedDB.open('api-cache', 1);
        request.onsuccess = function (event) {
            const db = event.target.result;
            const transaction = db.transaction(['data'], 'readwrite');
            const store = transaction.objectStore('data');
            store.put({ id: 'apiData', value: data });
        };
    });

// Retrieve data from IndexedDB
const request = indexedDB.open('api-cache', 1);
request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(['data'], 'readonly');
    const store = transaction.objectStore('data');
    const getRequest = store.get('apiData');
    getRequest.onsuccess = function (event) {
        console.log(getRequest.result.value);
    };
};
