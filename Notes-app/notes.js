const fs=require('fs');
const chalk=require('chalk');

const loadNotes=()=>{
    try{

        const dataBuffer=fs.readFileSync('notes.json');
    const dataJSON=dataBuffer.toString();
    return JSON.parse(dataJSON);
    }
    catch (e)
    {
         return [];
    }
    
}
const addNotes=(title,body)=>{
     const notes=loadNotes();
    // console.log(notes);
    //const duplicateNote=notes.filter( (note)=> note.title === title)
    const duplicateNote=notes.find((note)=> note.title === title)
    if(!duplicateNote)
    {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('New Note Added'));
    }
    else{
        console.log(chalk.red.inverse('Note Title Taken'));
    }
    

} 
const saveNotes= (notes)=>
{
     const dataJSON=JSON.stringify(notes);
     fs.writeFileSync('notes.json',dataJSON);

}
const removeNote=(title)=>
{
    const notes=loadNotes();
    const notesToKeep=notes.filter((note)=> note.title!==title )
    
         
    
      if(notes.length>notesToKeep.length)
      {
          console.log(chalk.bgGreen('Note removed!'));
        saveNotes(notesToKeep);
      }
      else{
          console.log(chalk.bgRed('No note found'));
      }
    
}
const listNotes=()=>
{
    const notes=loadNotes();
    console.log(chalk.bgBlue('Your Notes'));
    notes.forEach((note)=>{
        console.log('->'+note.title);
    })
}
const readNote=(title)=>
{
   const notes=loadNotes();
   const noteToRead=notes.find((note)=> note.title===title );
   if(noteToRead)
   {
       console.log(chalk.underline.bold.italic(noteToRead.title));
       console.log(noteToRead.body);
   }
   else
   {
       console.log(chalk.red('Error!'))
   }
}
module.exports = {
    addNotes : addNotes,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote:readNote
};
