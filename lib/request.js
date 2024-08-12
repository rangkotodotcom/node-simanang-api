import { defaults, post } from './instanceAxios';
// import Utils from './helpers/utils';

/**
 *
 * @param {string} url
 * @param {unknown} data
 * @returns
 */
const postForm = async (url, data) => {
    const params = new URLSearchParams()
    for (const key in data) {
        params.append(key, data[key])
    }

    try {
        const response = await post(url, params);
        console.log(response);
    } catch (error) {
        console.log(err.response.statusText);
    }
}

module.exports = { postForm };