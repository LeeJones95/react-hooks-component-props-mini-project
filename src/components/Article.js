function Article({ title, date="January 1, 1970", preview, minutes }) {
    let coffee;
    let bentoBox;
    let str='';
    if(minutes < 30){
        coffee = (round5(minutes)/5)
        for(let i = 0; i < coffee; i++){
            str += "☕";
        }
    }
    else{
        bentoBox = round10(minutes) / 10
        for(let i = 0; i < bentoBox; i++){
            str += "🍱";
        }
    }
    console.log(coffee)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {str + minutes} minute read</small>
            <p>{preview}</p>
        </article>
    );
}

function round5(x)
{
    return Math.ceil(x/5)*5;
}

function round10(x)
{
    return Math.ceil(x/10)*10;
}


export default Article;