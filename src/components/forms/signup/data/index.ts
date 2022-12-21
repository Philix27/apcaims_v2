interface AccountOption {
    text: string;
    index: number;
    value: "agent" | "ward admin" | "state admin";
}

export const accountOptions: AccountOption[] = [
    {text: "I am an agent", index: 1, value: "agent"},
    {text: "I am a ward admin", index: 2, value: "ward admin"},
    {text: "I am a state admin", index: 3, value: "state admin"},
]