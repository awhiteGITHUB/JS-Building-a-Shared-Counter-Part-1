function main(){

    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const refreshButton = document.querySelector('#refresh-button')

    let countValue = 0;

 
    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    function refresh(){
        countValue = 0
        countContainer.textContent = countValue;
    }

async function getCount() {
    let newCount = await fetch('http://localhost:9001/counter')
    let countResponse = await newCount.json()
    console.log(countResponse)
        return countResponse


}

getCount().then(function (resp) {
    console.log(resp.value)
    countValue = resp.value;
    countContainer.textContent = countValue;
})





    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refresh);
    countContainer.textContent = countValue;
}
main()