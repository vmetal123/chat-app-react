import Config from '../config/Config';

const register = async () => {
    try {
        const response = await fetch(`${Config.apiEndpoint}api/v1/account`);

        const result = await response.json();

        return result;
    }
    catch(error) {

    }
}

const login = async () => {
    try {
        const response = await fetch(`${Config.apiEndpoint}api/v1/auth`);

        const result = await response.json();

        return result;
    }
    catch(error) {

    }
}

export default {
    register,
    login
};