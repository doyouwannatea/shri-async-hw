class _Promise {
    constructor({ value, reason }) {
        this.status = ''

        if (value) {
            this.value = value
        }

        if (reason) {
            this.reason = reason
        }
    }
}

class _CompletedPromise extends _Promise {
    constructor(value) {
        super({ value })
        this.status = 'fulfilled'
    }
}

class _RejectedPromise extends _Promise {
    constructor(reason) {
        super({ reason })
        this.status = 'rejected'
    }
}

Promise._allSettled = async (collection = []) => {

    if (!Array.isArray(collection)) {
        return new Error('collection is not iterable')
    }

    const promises = []

    let interval = null
    let promisesChecked = 0

    const promise = new Promise(async (resolve) => {
        interval = setInterval(() => {
            if (promisesChecked === collection.length) {
                resolve()
            }
        }, 100);

        for (const item of collection) {
            promisesChecked += 1

            if (!item || !item.then) {
                promises.push(new _CompletedPromise(item))
                continue
            }

            try {
                const value = await item
                promises.push(new _CompletedPromise(value))
            } catch (error) {
                promises.push(new _RejectedPromise(error))
            }
        }
    })

    await promise
    clearInterval(interval)
    return promises
}