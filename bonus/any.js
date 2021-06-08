Promise._any = async (collection = []) => {
    if (!Array.isArray(collection) || collection.length === 0) {
        return Promise.reject(new Error('All promises were rejected'))
    }

    let interval = null
    let rejections = 0

    const promise = new Promise((resolve, reject) => {
        interval = setInterval(() => {
            if (rejections === collection.length) {
                reject()
            }
        }, 100);

        for (const item of collection) {

            if (!item || !item.then) {
                return resolve(item)
            }

            item.then(resolve).catch(() =>
                rejections += 1
            )
        }
    })

    try {
        const resolvedPromise = await promise
        clearInterval(interval)
        return resolvedPromise
    } catch (error) {
        return Promise.reject(new Error('All promises were rejected'))
    }
}