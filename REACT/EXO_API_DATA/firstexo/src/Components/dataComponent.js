import { Component } from "react";
import { getInfoApi } from "./data.api";
import { Client } from "./Client";

export class DataComponent extends Component {
    constructor (props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        // getData().then(data => {
        //     this.setState({data : dataClients})
            getInfoApi().then(res => {
                console.log(res.data)
                this.setState({data : [...res.data]})
            })
        }
    render(){
        return(
            <div>
                {
                this.state.data.length == 0 ? <div> Veuillez patientez : </div>
                :
                (<>
                    {this.state.data.map((c) => (<Client key={c.id} data={c}></Client>))}
                </>)
                }
            </div>
        )
    }
}
