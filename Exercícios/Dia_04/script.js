var app = <h1>Hello, world outside a Component</h1> 
var mountComponent = document.querySelector('#app')

//Sem component
//ReactDOM.render(app, mountComponent)
//ReactDOM.render(o que renderizar, onde renderizar)

//COMPONENTS

class APP extends React.Component{//Precisa extender React.Component
    render(){
        return <h1>Hello, world inside a Component</h1>
    }
}

//Com Component

ReactDOM.render(<APP/>, mountComponent)