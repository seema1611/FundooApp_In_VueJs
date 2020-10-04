import httpservice from './Httpservice';

class NoteService {

    getAddNote(addNoteDetails){
        return httpservice.post('notes/addNotes',addNoteDetails)
    }

    fetchNotesList(){
        return httpservice.get('notes/getNotesList')
    }

    moveToTrash(trashData){
        return httpservice.post('notes/trashNotes',trashData)
    }
}

export default new NoteService