
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function BubbleSort(arr, setArr) {
    var temp_arr = [];
    for (var k = 0; k < arr.length; k++) {
        temp_arr[k] = arr[k];
    }
    for (var i = 0; i < temp_arr.length; i++) {
        setArr(temp_arr);
        await sleep(40);
        for (var j = 0; j < (temp_arr.length - i - 1); j++) {
            if (temp_arr[j] > temp_arr[j + 1]) {
                var temp = temp_arr[j]
                temp_arr[j] = temp_arr[j + 1]
                temp_arr[j + 1] = temp
            }
            setArr(temp_arr);
            await sleep(40);
        }
        setArr(temp_arr);
        await sleep(40);
    }
    setArr(temp_arr);
    await sleep(40);
}
export default BubbleSort

