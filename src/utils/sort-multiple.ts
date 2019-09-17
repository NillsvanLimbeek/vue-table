import { SortBy } from '@/data';

export function sortMultiple(arr: any[], sortBy: SortBy[]) {
    arr.sort((a, b) => {
        let i = 0;
        let result = 0;

        while (i < sortBy.length && result === 0) {
            result =
                sortBy[i].direction *
                (a[sortBy[i].title].toString() < b[sortBy[i].title].toString()
                    ? -1
                    : a[sortBy[i].title].toString() >
                      b[sortBy[i].title].toString()
                    ? 1
                    : 0);
            i++;
        }
        return result;
    });
}
