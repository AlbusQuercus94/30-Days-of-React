const data = [{
    timestamp: new Date().getMinutes()+9,
    text: "Almocei",
    user: {
      id: 1,
      name: 'Doug The Dog',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
      { from: 'Eri', text: 'Heavy Maching Gun' }
    ]
  },
  {
    timestamp: new Date().getMinutes()+5,
    text: "Kabooom?!",
    user: {
      id: 2,
      name: 'Rico The Peguim',
      avatar: "https://i.pinimg.com/originals/82/34/58/823458fa4d9c8e80dab3629babdd2105.jpg"
    },
    comments: [
      { from: 'Fio', text: 'Laser Gun' },
      { from: 'Eri', text: 'Drop Shot' }
    ]
  }
]
/*DEFAULT CODE*/

/*Passando props para o Content*/
class Content extends React.Component{
    render() {

        const {atividades} = this.props;
        return (
            <div className="content">
                <div className="line"></div>
                {/* Timeline Item */}
                {/*Transformando o component para multi atividades usando a função MAP */}
                {atividades.map((atividade) => (
                    <AtividadeItem 
                    atividade={atividade}/>
                ))}
            </div>
        )
    }
}

/*Cabeçalho */
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                {/*O menu foi desenhado com o css */}
                <div className='menuIcon'>
                    <div className='dashTop'></div>
                    <div className='dashBottom'></div>
                    <div className='circle'></div>
                </div>
                <span className='title'>
                    {this.props.title}
                </span>
                <input type='text' className='searchInput' placholder='Search'/>
                <div className='fa fa-search searchIcon'></div>
            </div>
        )
    }
}

//Facilitando o código, separando Content das Atividades

class AtividadeItem extends React.Component{
    render(){
        const {atividade} = this.props;


        return(
            <div className='item'>
                <div className='avatar'>
                    <img
                        alt ={atividade.user.name}
                        src={atividade.user.avatar}
                    />
                </div>
                <span className='time'>
                    {atividade.timestamp} minutes ago
                </span>
                <p>{atividade.text}</p>
                <div className='commentCount'>
                    {atividade.comments.length}
                </div>
            </div>
        )
    }
}

/*Aqui é onde puxa todos os componentes anteriores */
class App extends React.Component {
    render() {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title='Home'/>
                    <Header title='Contacts'/>
                    <Header title='Timeline'/>
                    <Content atividades={data}/>
                </div>
            </div>
        )
    }
}

var mount = document.querySelector('#app');
ReactDOM.render(<App />, mount);
