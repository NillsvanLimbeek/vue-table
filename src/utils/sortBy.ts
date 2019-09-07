export function sortBy(arr: any, type: string) {
    return arr.sort((a: any, b: any) => {
        let objA;
        let objB;

        objA = a[type].toUpperCase();
        objB = b[type].toUpperCase();

        if (objA < objB) {
            return -1;
        }

        if (objA > objB) {
            return 1;
        }

        return 0;
    });
}
