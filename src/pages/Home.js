  
import React, { Component } from 'react';
import TranslationModel from '../models/translations'
import TranslationCard from '../components/TranslationCard/TranslastionCard';

class NewTranslation extends Component{

    state = {
        oringalInput: '',
        data: {},
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            oringalInput: this.state.oringalInput
        }

        TranslationModel.create(data)
            .then(res => {
                console.log('res data', res)
                // this.props.hisotry.push('/history')
                this.setState({data: res})
            })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-input'>
                        <input type="text" id="input" name="oringalInput" onChange={ this.handleChange } required minLength="4" maxLength="255" placeholder="Enter Your Text Here"/>
                        <input type="submit" value="Translate!"/>
                    </div>
                </form>
                <TranslationCard data={this.state.data} />
            </div>
        )
    }

}


export default NewTranslation;