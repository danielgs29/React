function Btn(){
    const clickHandler=()=>console.log("Clicked");
    return (
        <button onClick={clickHandler}>
            Guess the number between 1 and 3
        </button>
    );
}

<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>

export default Btn;