function samplePromise()
{
    return Promise.resolve("test test coba lagi");
}

const name =  await samplePromise();
console.info(name);