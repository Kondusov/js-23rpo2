let arrInd = [1,2,3];
console.log(arrInd[0]);
console.log(arrInd[0] = '1');
console.log(arrInd);
arrInd.push('четвертый');
console.log(arrInd);


let assocArray = {
    'one':'первый',
    'second':'второй',
    'three':'третий'
}
console.log(assocArray.one);
console.log(assocArray.one = 'новый первый');
console.log(assocArray.four = ' динамически четвертый');
console.log(assocArray);
