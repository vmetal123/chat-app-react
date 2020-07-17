import Config from '../config/Config';

export const register = async ({email, password}) => {
    try {
        const response = await fetch(`${Config.apiEndpoint}api/v1/account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const result = await response.json();

        return result;
    }
    catch(error) {
        throw error;
    }
}

export const login = async ({email, password}) => {
    debugger;
    try {
        const url = `${Config.apiEndpoint}api/v1/Auth`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const result = await response.json();

        return result;
    }
    catch(error) {
        throw error;
    }
}