function parseError(err) {
    if (err instanceof Error) {
        if (!err.errors) {
            err.errors = [err.message];
        } else {
            const error = new Error('Input validation error');
            error.errors = Object.fromEntries(Object.values(err.errors).map(e => [e.path, e.message]));
            error.message = Object.values(error.errors).join('\n');

            return error;
        }
    } else if (Array.isArray(err)) {
        const error = new Error('Input validation error');
        error.errors = Object.fromEntries(err.map(e => [e.path, e.msg]));
        error.message = Object.values(error.errors).join('\n');

        return error;
    }

    return err;
}

module.exports = { parseError };