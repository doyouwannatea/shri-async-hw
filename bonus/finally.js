Promise.prototype._finally = async function (cb) {
    try {
        await this
    } catch (error) { }

    cb()
    return this
}