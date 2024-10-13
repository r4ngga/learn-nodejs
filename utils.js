const fs = require('fs')

function writeDataToFile( filename,content ){ //can writedatatoApi
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if(err){
            console.log(err)
        }
    })
} 

function getPostData(req){
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chucnk) => {
                body += chucnk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    writeDataToFile,
    getPostData
}