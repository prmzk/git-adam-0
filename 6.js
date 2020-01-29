//13m 11s Adam Primarizki

/*

Diberikan sebuah function trackStep yang menerima dua parameter:
 - parameter pertama merupakan array kumpulan string yang berisi nama ruangan
   yang bisa dilewati per langkah
 - parameter kedua merupakan array kumpulan string yang berisi perintah maju atau mundur

 Output dari function tersebut adalah berupa object literal yang memberitahukan
 sekarang berada diruangan mana dan kumpulan list ruangan yang bisa dilewati jika ingin mundur
 
 perintah/command dari moves akan bekerja seperti ini:
 - next: akan melangkah maju ke next rooms dan memasukkan nama rooms sekarang berada ke listPrevRooms
 - back: akan kembali ke rooms sebelumnya dan menghapus nama rooms tersebut dari listPrevRooms

 ASUMSI:
 - jika perintah next telah melebihi jumlah rooms, maka tetap berada di room terakhir

CONTOH 1
========
INPUT:
******
  rooms: ['Foxes Room', 'Wolves Room','Tigers Rooms', 'Elephants Rooms']
  moves: ['next', 'next', 'next', 'back']
OUTPUT:
*******
  {
    room: 'Wolves Room',
    listPrevRooms: ['Foxes Room']
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'Foxes Room'
    listPrevRooms: []
  }
- moves index-1: next
  {
    room: 'Wolves Room'
    listPrevRooms: ['Foxes Room']
  }
- moves index-2: next
  {
    room: 'Tigers Room'
    listPrevRooms: ['Foxes Room', 'Wolves Room']
  }
- moves index-3: back
  {
    room: 'Wolves Room'
    listPrevRooms: ['Foxes Room']
  }
CONTOH 2:
==========
INPUT:
******
  rooms: ['A Room', 'B Room']
  moves: ['next', 'next', 'next', 'next']
OUTPUT:
*******
  {
    room: 'B Room',
    listPrevRooms: ['A Room']
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'A Room'
    listPrevRooms: []
  }
- moves index-1: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
- moves index-2: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
- moves index-3: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
CONTOH 3:
==========
INPUT:
******
  rooms: ['A Room', 'B Room']
  moves: ['next', 'back', 'back']
OUTPUT:
*******
  {
    room: '',
    listPrevRooms: []
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'A Room'
    listPrevRooms: []
  }
- moves index-1: back
  {
    room: ''
    listPrevRooms: []
  }
- moves index-2: next
  {
    room: ''
    listPrevRooms: []
  }
*/
function trackStep(rooms, moves) {
  let output = {}
  output.room = '';
  output.listPrevRooms = [];
  let flag;

  if(rooms[0] && moves[0]){
    for(let i=0; i<moves.length; i++){
      if(moves[i] === 'next'){
        if(!output.room){
          output.room = rooms[0];
          flag = 0;
        }else{
          if(rooms[flag + 1]){
            output.room = rooms[flag + 1];
            flag = flag + 1;
          }
        }
      }else if(moves[i] === 'back'){
        if(flag !== 0){
          output.room = rooms[flag - 1];
          flag = flag - 1;
        }else{
          output.room = '';
        }
      }
    }

    for(let i=0; i<flag; i++){
      output.listPrevRooms.push(rooms[i]);
    }
    
    return output;
  }
  else if(!rooms[0] && !moves[0]){
    return 'Invalid rooms and moves';
  }else if(!moves[0]){
    return 'No steps!';
  }else if(!rooms[0]){
    return 'There is no rooms can be explored';
  }

}
/* TEST CASE / DRIVER CODE */
console.log(trackStep([ 'Foxes Room', 'Wolves Room','Tigers Rooms', 'Elephants Rooms' ], [ 'next', 'next', 'next', 'back' ]));
//  { room: 'Wolves Room', listPrevRooms: [ 'Foxes Room' ] }
console.log(trackStep([ 'A Room', 'B Room' ], [ 'next', 'next', 'next', 'next' ]));
// { room: 'B Room', listPrevRooms: [ 'A Room '] }
console.log(trackStep([ 'A Room', 'B Room' ], [ 'next', 'back', 'back' ]));
// { room: '', listPrevRooms: [] }
console.log(trackStep([], [])); // Invalid rooms and moves
console.log(trackStep(['A rooms'], [])); //No steps!
console.log(trackStep([], ['next', 'back', 'next'])); //There is no rooms can explore
