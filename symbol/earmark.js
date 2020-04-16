function createEarMarker() {
    const PRIVATE = Symbol('very private');
    return {
        mark(obj) {
            obj[PRIVATE] = 'super sensitive data';
        },
        check(obj) {
            return obj[PRIVATE];
        }
    };
}

const marker = createEarMarker();

const obj = {my: 1, public: 2, values: 3};

marker.mark(obj);
console.log(obj);

console.log(marker.check(obj));
