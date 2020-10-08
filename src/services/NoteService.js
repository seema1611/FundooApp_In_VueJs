import httpservice from './Httpservice';

class NoteService {

    getAddNote(addNoteDetails){
        return httpservice.post('notes/addNotes',addNoteDetails)
    }

    fetchNotesList(){
        return httpservice.get('notes/getNotesList')
    }

    DeletedNoteMoveToTrash(trashData){
        return httpservice.post('notes/trashNotes',trashData)
    }
    
    fetchTrashNotesList() {
        return httpservice.get('notes/getTrashNotesList')
    }

    updateNotes(updateData) {
        return httpservice.post('notes/updateNotes',updateData)
    }

    deletePermanent(noteId){
        return httpservice.post('notes/deleteForeverNotes',noteId)
    }

    changeCardColor(colorData){
        return httpservice.post('notes/changesColorNotes',colorData)
    }

    archiveNotes(archiveData){
        return httpservice.post('notes/archiveNotes',archiveData)
    }

    fetchArchiveNotes(){
        return httpservice.get('notes/getArchiveNotesList')
    }

    unarchiveNotes(noteData){
        return httpservice.post('notes/archiveNotes',noteData)
    }
}

export default new NoteService