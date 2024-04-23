function extractLinks(arrLinks) {
    return arrLinks.map((objectLink) => Object.values(objectLink).join());
}

export default async function listValidate(listLinks) {
    const links = extractLinks(listLinks);
    const status = await checkStatus(links);

    return listLinks.map( (object, ind) => ({
        ...object,
        status: status[ind]
    }))

    
}

async function checkStatus(listURLs) {
    const arrStatus = await Promise
        .all(
            listURLs.map(async (url) => {
                try {
                    const response = await fetch(url, { method: 'HEAD' });
                    return response.status;
                } catch (error) {
                   return manageErrors(error);
                }
            })
        );
    return arrStatus;
}


function manageErrors(erro){
    if (erro.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado';
    } else {
        return 'Problems';
    }
}