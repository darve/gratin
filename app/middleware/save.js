
import xhr from 'axios';

// Example of an asynchronous API call.
const save = async (filename, svg) => new Promise((resolve, reject) => {
    xhr.post('/save', { filename, svg })
        .then((response) => resolve(response.data)).catch(err => reject(err));
});

export default save;
