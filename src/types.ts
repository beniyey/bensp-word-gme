export type LanguagePair = {
    from: string,
    to: string
}

export type User = {
    firstName: string,
    lastName: string,
    email: string,
    solved: number[],
    languagePairs: LanguagePair[],
    level: number,
    streak: string,
    password: string
}