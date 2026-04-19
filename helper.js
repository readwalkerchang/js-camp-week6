async function requestHelper({url,method = 'GET',headers = {},body}){
    const request = {
        method,
        headers
    };
    if (body !== undefined){
        request.headers = {
            ...headers,
            "Content-Type": "application/json",
        }
        request.body = JSON.stringify(body);
    }
    try{
        const response = await fetch(url,request);
        const data = await response.json();
        if(!response.ok){
            return {status: false, error: data.message}
        }
        return data
    }catch(exception){
        return { status: false, error: exception.message };
    }

}

module.exports = {
    requestHelper
}