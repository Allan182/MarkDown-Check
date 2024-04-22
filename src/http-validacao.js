
function extractLinks(arrLinks) {
    return arrLinks.map((objectLink) => Object.values(objectLink).join());
}

export default async function listValidate(listLinks) {
    const links = extractLinks(listLinks);
    const status = await checaStatus(links);
    return status;
}

async function checaStatus(listURLs) {
    const arrStatus = await Promise
        .all(
            listURLs.map(async (url) => {
                try {
                    const response = await fetch(url, { method: 'HEAD' });
                    console.log(response);
                    return response.status;
                } catch (error) {
                    console.log(error);
                }
            })
        );
    return arrStatus;
}


