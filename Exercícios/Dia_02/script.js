class HelloWorld extends React.Component{
    render() {
        return(
            <h1 className='large'>Hello World</h1>
        )   
    }
}
ReactDOM.HelloWorld.render();

/*O mesmo componente acima, mas escrito de uma forma sem misturar o HTML e o JS

class HelloWorl extends React.Component{
    render(){
        return(
            React.createElement(
                'h1',
                {className: 'large'},
                'Hello World'
            )
        );
    }
}

*/

/*Outra comparação de como escrever no HTML e como escrever usando o React.

HTML:
    <div>
        <img src='img.png' alt='Source Img' />
        <h1> Hello Pedro </h1>
    <div>

React:
    React.createElement('div', null,
        React.createElement('img', {src: 'img.png, alt: 'Source Img'}),
        React.createElement('h1', null, 'Hello Pedro')
    );

*/