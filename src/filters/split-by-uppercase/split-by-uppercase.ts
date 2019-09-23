export default function splitByUppercase(str: string): string {
    return str
        .split(/(?=[A-Z])/)
        .map((x) => x.toLowerCase())
        .join(' ');
}
