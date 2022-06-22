const array1 = [1, 1, 2, 3];
const array2 = [3, 4, 5];

function showUniqueElementsWithLastIndexOf(arrayOne, arrayTwo) {
    const commonArray = array1.concat(array2);
    const arrayToRemove = [];
    for (let i = 0, l = commonArray.length; i < l; i++) {
        if (commonArray.lastIndexOf(commonArray[i]) !== i)
            arrayToRemove.push(commonArray[i]);
    }
    const result = commonArray.filter(item => !arrayToRemove.includes(item))
    console.log(result)
}

function showUniqueElementsWithIndexOfAndLastIndexOf(arrayOne, arrayTwo) {
    const commonArray = array1.concat(array2);
    const setofIntegers = new Set(commonArray);
    const result = [];
    
    setofIntegers.forEach((element) => {
        if(commonArray.indexOf(element) === commonArray.lastIndexOf(element)) {
            result.push(element);
        }
    });
    console.log(result);
}

function showUniqueElementsWithMap(arrayOne, arrayTwo) {
    const mapOfElements = new Map();
    filterArrayToMap(mapOfElements, arrayOne);
    filterArrayToMap(mapOfElements, arrayTwo);
    const resultMap = new Map(
        Array.from(mapOfElements).filter(([key, value]) => value === 1)
    );
    const result = Array.from(resultMap.keys());
    console.log(result);
}

function filterArrayToMap(commonMap, array) {
    array.forEach(element => {
        if (!commonMap.has(element)) {
            commonMap.set(element, 1);
        } else {
            const newValue = commonMap.get(element) + 1;
            commonMap.set(element, newValue);
        }
    });
}

showUniqueElementsWithLastIndexOf(array1, array2);
showUniqueElementsWithIndexOfAndLastIndexOf(array1, array2);
showUniqueElementsWithMap(array1, array2);