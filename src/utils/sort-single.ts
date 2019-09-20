export function sortSingle(arr: any, type: string): any[] {
    return arr.sort((a: any, b: any) => {
        const objA = a[type].toString().toUpperCase();
        const objB = b[type].toString().toUpperCase();

        if (objA < objB) {
            return -1;
        }

        if (objA > objB) {
            return 1;
        }

        return 0;
    });
}
