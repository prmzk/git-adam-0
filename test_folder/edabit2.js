function isEarlyBird(range, n) {
    let sequence = '';
    let output = [];
    for(let i=0; i<=range; i++){
        sequence += String(i);
    }
    for(let i=0; i<sequence.length; i++){
        let posisi = [];
        if(String(n)[0] === sequence[i]){
            posisi.push(i);
            for(let j=1; j<String(n).length; j++){
                posisi.push(i+j);
                if(String(n)[j] !== sequence[i+j]){
                    posisi = [];
                    break;
                }
            }
            
        }
        if(posisi[0]){
        output.push(posisi);
        }
    }
    
    for(let i=0; i<output.length;  i++){
        if(n<100){
            if(output[i][0] === (10+((n-10)*2))){
                if(i !==0 ){
                    output.push('Early Bird!');
                }
            }
        }else{
            if(output[i][0] === (190+((n-100)*3))){
                if(i !==0 ){
                    output.push('Early Bird!');
                }
            }
        }
    }
    return output;

}


console.log(isEarlyBird(20, 12))
//[[1, 2], [14, 15]]))
console.log(isEarlyBird(20, 14))
//[[18, 19]])) //ini ngga
console.log(isEarlyBird(101, 101))
//[[10, 11, 12], [193, 194, 195]]))
console.log(isEarlyBird(50, 34))
//[[3, 4], [58, 59], [77, 78]]))
console.log(isEarlyBird(212, 156))
//[[358, 359, 360]]))
console.log(isEarlyBird(400, 240))
//[[610, 611, 612]]))
console.log(isEarlyBird(900, 888))
//[[166, 167, 168], [2554, 2555, 2556], [2555, 2556, 2557], [2556, 2557, 2558]]))
console.log(isEarlyBird(1200, 745))
//[[1263, 1264, 1265], [1613, 1614, 1615], [2125, 2126, 2127]]))
console.log(isEarlyBird(2000, 666))
//[[122, 123, 124], [1888, 1889, 1890], [1889, 1890, 1891], [1890, 1891, 1892], [5555, 5556, 5557]]))

// Test.assertSimilar(isEarlyBird(20, 12), [[1, 2], [14, 15], 'Early Bird!'], "Example in Instructions tab")
// Test.assertSimilar(isEarlyBird(20, 14), [[18, 19]])
// Test.assertSimilar(isEarlyBird(101, 101), [[10, 11, 12], [193, 194, 195], 'Early Bird!'])
// Test.assertSimilar(isEarlyBird(50, 34), [[3, 4], [58, 59], [77, 78], 'Early Bird!'])
// Test.assertSimilar(isEarlyBird(212, 156), [[358, 359, 360]])
// Test.assertSimilar(isEarlyBird(400, 240), [[610, 611, 612]])
// Test.assertSimilar(isEarlyBird(900, 888), [[166, 167, 168], [2554, 2555, 2556], [2555, 2556, 2557], [2556, 2557, 2558], 'Early Bird!'])
// Test.assertSimilar(isEarlyBird(1200, 745), [[1263, 1264, 1265], [1613, 1614, 1615], [2125, 2126, 2127], 'Early Bird!'])
// Test.assertSimilar(isEarlyBird(2000, 666), [[122, 123, 124], [1888, 1889, 1890], [1889, 1890, 1891], [1890, 1891, 1892], [5555, 5556, 5557], 'Early Bird!'])