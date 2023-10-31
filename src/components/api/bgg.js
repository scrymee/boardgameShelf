export async function fetchSearchBoardGame(searchQuery) {

    const url = "https://api.geekdo.com/xmlapi2/search?query=" + searchQuery;
    const response = await fetch(url)
    const xmlData = await response.text()
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
    const items = xmlDoc.querySelectorAll('item');
    let newGameLists = [];
    if (items.length > 0) {
        items.forEach((item) => {
            const name = item.querySelector('name').getAttribute('value')
            const id = item.getAttribute('id')
            const gameList = { name: name, id: id }
            newGameLists.push(gameList);
        });
    }
    return newGameLists;
}

export async function fetchBoardGameThumbnail(bggId) {
    const url = "https://api.geekdo.com/xmlapi2/things?id=" + bggId;
    const response = await fetch(url)
    const xmlData = await response.text()

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'application/xml')
    // console.log(xmlDoc)
    const thumbnail = xmlDoc.querySelector('thumbnail').textContent
    return thumbnail
}