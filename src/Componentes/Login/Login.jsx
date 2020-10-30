import React from 'react'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <label>Usuario:</label>
                <input type="text" name="usuario"></input>
                <label>Senha:</label>
                <input type="password" name="senha"></input>
            </div>
        )
    }
}
export default Login;