/*DEFAULT CODE*/

/*Local conteúdo da linha do tempo */
class Content extends React.Component{
    render() {
        return (
            <div className="content">
                <div className="line"></div>
                {/* Timeline Item */}
                <div className='item'>
                    <div className='avatar'>
                        <img
                            alt ='Doug, the dog'
                            src='http://www.croop.cl/UI/twitter/images/doug.jpg'
                        />
                    </div>
                    <span className='time'>An hour ago</span>
                    <p>Comi o almoço</p>
                    <div className='commentCount'>2</div>
                </div>
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
                <span className='title'>Timeline</span>
                <input type='text' className='searchInput' placholder='Search'/>
                <div className='fa fa-search searchIcon'></div>
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
                    <Header/>
                    <Content/>
                </div>
            </div>
        )
    }
}

var mount = document.querySelector('#app');
ReactDOM.render(<App />, mount);
