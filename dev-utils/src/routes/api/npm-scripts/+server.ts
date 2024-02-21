export type FileContext = {
    name: string,
    relativePath: string,
    path: string,
    content: string
}

export type AiPromptInput = {
    model: "gpt-3.5-turbo" | "gpt-4-1106-preview",
    system: string,
    msg: string
}

export type AiPromptOutput = {
    message: string,
    error?: any
}

export type FetchBackendFilesOutput = {
    availableFiles: FileContext[],
    message: string,
    error?: any
}

export type UpdateBackendFilesOutput = {
    message: string,
    error?: any
}