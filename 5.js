//10m 38s
/*
  ===========
  HASIL UJIAN
  ===========

  Hasil Ujian adalah sebuah fungsi untuk mendapatkan informasi status lulus atau
  tidak lulus-nya student yang mengikuti ujian

  Fungsi ini akan mengembalikan sebuah object dengan jumlah student, nama-nama student
  yang lolos, nama-nama student yang gagal, nilai tertinggi dan nilai rata-rata student

  - Student dinyatakan lulus jika nilainya lebih dari atau sama dengan 70

  [RULES]:

  - TIDAK boleh menggunakan built in function max(), filter(), find(), sort()
  - TIDAK boleh menggunakan Regex
*/

function hasilUjian(students){
  let output = {};
  
  if(typeof(students) !== 'object'){
    return "Invalid Input";
  }
  else if(students[0]){
    output.jumlahStudent = students.length;
    output.lulus = [];
    output.gagal = [];
    output.nilaiTertinggi = 0;
    output.nilaiAverage = 0;
    for(let i=0; i<students.length; i++){
        if(students[i].nilai >= 70){
            output.lulus.push(students[i].nama);
        }else{
            output.gagal.push(students[i].nama);
        }

        if(students[i].nilai > output.nilaiTertinggi){
            output.nilaiTertinggi = students[i].nilai;
        }

        output.nilaiAverage += students[i].nilai;
    }
    output.nilaiAverage = Math.round(output.nilaiAverage/students.length);

    return output;
    }else{
        return "TIDAK ADA PESERTA UJIAN";
    }
}

console.log(hasilUjian([
    {
        nama: "Arman",
        nilai: 90
    },
    {
        nama: "Budi",
        nilai: 70
    },
    {
        nama: "Caca",
        nilai: 50
    },
    {
        nama: "Dina",
        nilai: 60
    },
    {
        nama: "Erwin",
        nilai: 100
    },
]));

/* OUTPUT:
{
    jumlahStudent: 5,
    lulus: ["Arman", "Budi", "Erwin"],
    gagal: ["Caca", "Dina"]
    nilaiTertinggi: 100,
    nilaiAverage: 74
}
*/

console.log(hasilUjian([
    {
        nama: "Daniel",
        nilai: 23
    },
    {
        nama: "Bima",
        nilai: 69
    },
    {
        nama: "Karim",
        nilai: 97
    },
    {
        nama: "Armedi",
        nilai: 83
    },
    {
        nama: "Dimitri",
        nilai: 45
    },
    {
        nama: "Barry",
        nilai: 77
    },
]));

/* OUTPUT:
{
    jumlahStudent: 6,
    lulus: [ 'Karim', 'Armedi', 'Barry' ],
    gagal: [ 'Daniel', 'Bima', 'Dimitri' ],
    nilaiTertinggi: 97,
    nilaiAverage: 66
}
*/


console.log(hasilUjian([
    {
        nama: "Adam",
        nilai: 23
    },
    {
        nama: "pr",
        nilai: 69
    },
    {
        nama: "m",
        nilai: 97
    },
    {
        nama: "zzzzzzzzz",
        nilai: 83
    },
    {
        nama: "kk",
        nilai: 45
    },
    {
        nama: "halo",
        nilai: 77
    },
]));

console.log(hasilUjian([]));
// "TIDAK ADA PESERTA UJIAN"

console.log(hasilUjian("Dito"));
// "Invalid Input"

console.log(hasilUjian(20));
// "Invalid Input"
