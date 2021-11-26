class Tempo extends React.Component{
    
    /*Versão estática
    render(){
        const horaAtual = new Date(),
            hora = horaAtual.getHours(),
            minutos = horaAtual.getMinutes(),
            segundos = horaAtual.getSeconds(),
            ampm = hora >= 12 ? 'pm' : 'am';
        
        return(
            <div className='relogio'>
                {/*As chaves fazem com que o código escrito seja em JS, assim, o que está fora das chaves está escrito em HTML /}
                {
                    hora == 0 ? 12 :
                    (hora > 12) ? hora - 12 : hora
                }:{
                    minutos > 9 ? minutos : `0${minutos}`
                }:{
                    segundos > 9 ? segundos : `0${segundos}`
                } {ampm}
            </div>
        )
    */

    constructor(props) {
        super(props);
        this.state = this.getTime();
    }
    

    //Vai ser explicado mais posteriormente
    componentDidMount(){
        this.setTimer();
    }

    setTimer(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateTempo.bind(this), 1000);
    }

    getTime(){
        const horaAtual = new Date();
        return{
            hora: horaAtual.getHours(),
            minutos: horaAtual.getMinutes(),
            segundos: horaAtual.getSeconds(),
            ampm: this.hora >= 12 ? 'pm' : 'am'
        }
    }

    updateTempo(){
        this.setState(this.getTime, this.setTimer);
    }

    /*Versão dinâmica */
    render() {
        const {hora, minutos, segundos, ampm} = this.state;
        
        return(
            <div className='relogio'>
                {
                    hora == 0 ? 12 :
                    (hora > 12) ? hora - 12 : hora
                }:{
                    minutos > 9 ? minutos : `0${minutos}`
                }:{
                    segundos > 9 ? segundos : `0${segundos}`
                } {ampm}
            </div>
        )

    }
}

const mount = document.querySelector('#app')
ReactDOM.render(<Tempo/>, mount)
