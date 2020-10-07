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
}

export default new NoteService