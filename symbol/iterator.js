const iterable = {
    red: true,
    green: false,
    blue: true,
    orange: false,
    * [Symbol.iterator]() {
        for (const entry of Object.entries(this)) {
            if (entry[1]) {
                yield entry[0];
            }
        }
    }
}

for (const truthyPropKeys of iterable) {
    console.log(truthyPropKeys)
}
