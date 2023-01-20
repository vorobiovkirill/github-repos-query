export const getUniqueListBy = <T, K extends keyof T>(arr: T[], key: K): T[] => {
    return [...new Map(arr.map((item: T) => [item[key], item])).values()]
}