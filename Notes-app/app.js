const chalk=require('chalk');
const notes=require('./notes.js');
const yargs=require('yargs');
yargs.version('1.1.1');//Customize yargs verison
yargs.command({
  command : 'add',
  describe : 'Add a New Note!',
  builder : {
      title:{
         describe : 'title of the note',
         demandOption : true ,
         type : 'string'
      },
      body:{
          describe : 'this is the body ',
          demandOption : true,
          type : 'string'

      }
  },
  handler(argv)
  {
      notes.addNotes(argv.title,argv.body);
  }

})
// Create Remove Command
yargs.command({
    command : 'remove',
    describe : 'Remove a Note!',
    builder:({
        title:{
       describe : 'title of note',
       demandOption : true,
       type : 'string'     
        }
    }),
    handler(argv)
    {
        notes.removeNote(argv.title);
    }
})
//Create a list Command
yargs.command({
    command : 'list',
    describe : 'List all the Notes',
    handler()
    {
        console.log('here');
        notes.listNotes();
    }
})
//Create a Read Command
yargs.command({
    command : 'read',
    describe : 'Read a Note',
    builder :{
        title:{
            describe:'title of note',
            demandOption : true,
            type : 'string'
        }

    },
    handler(argv)
    {
        notes.readNote(argv.title);
    }
})
//console.log(process.argv);
yargs.parse();
