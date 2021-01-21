export type SystemState  = {
    posts: any[]
};


export type TodoListProps = {
    deleteNote(id: string, title: string): any
    newNote(newNoteText: string): any
    posts: TTodos[]
    uploadNotes(): any
}

export type TTodos = {
    date: string
    title: string
    id: string
}
