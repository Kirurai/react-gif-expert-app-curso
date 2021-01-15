
const getGifs = async(category) => {
    const apiKey = 'neifP4xqUpPUTrV91cwAtbSIPjdS401Q';
    const limitImg = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${limitImg}&api_key=${apiKey}`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    });
    return gifs;
}

export default getGifs;