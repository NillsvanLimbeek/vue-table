export default function splitByUppercase(str: string) {
    return str
        .split(/(?=[A-Z])/)
        .map((x) => x.toLowerCase())
        .join(' ');
}
