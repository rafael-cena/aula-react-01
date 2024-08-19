import { Component } from "react";

export default class Data extends Component {
    
    constructor (props) {
        super(); //executa o constrtor do pai
        this.props = props;
        this.state = {
            dataAtual : new Date().toLocaleString()
        }
    }

    //fase de montagem
    componentDidMount () {
        console.log("O componente foi montado.");
        //nao é permitido atualizar o estado do componente diretamente
        // this.state = 
        this.setState({
            dataAtual : new Date().toLocaleString()
        })
    }

    componentDidUpdate () {
        console.log("O componente foi atualizado.");
        setTimeout(() => {
            this.setState({
                dataAtual : new Date().toLocaleString()
            })
        }, 1000);
    }

    // sobrescrita de método
    render() {
        return (
            <h1>{ this.props.texto || "" } {this.state.dataAtual}</h1>
        )
    }
}