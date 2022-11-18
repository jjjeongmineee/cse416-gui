export function titleCase(str) {
    return str.split(' ').map(s => s[0].toUpperCase()+s.substring(1)).join(' ');
}
