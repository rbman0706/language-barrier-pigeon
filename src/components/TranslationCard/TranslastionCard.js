import React from 'react';

const TranslationCard = (props) => {
    console.log(props.data)
  return (
    <div className="TranslationCard">
        <h3>{ props.data.oringalInput }</h3>

    </div>
  );
}

export default TranslationCard;