export async function fetchImages(query) {
    const API_KEY = '45536153-cc603d9bdbd983a3052077003'; 
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data;
}
