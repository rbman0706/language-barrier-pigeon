import React, { Component } from 'react';
import TranslationModel from '../models/translations';

import TranslationCard from '../components/TranslationCard/TranslastionCard'

class TranslationShow extends Component {
  state = {
    translation: {},
    currentTranslation: this.props.match.params.id
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    TranslationModel.show(this.state.currentTranslation).then(data => {
      this.setState({ translation: data.translation })
    })
  }

  render() {
    console.log(this.state.translation)
    return (
      <div>
        <TranslationCard {...this.state.translation} />
      </div>
    );
  }
}

export default TranslationShow;