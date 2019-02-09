import React from 'react';
import { ContractAllItems } from '../actions/display';
import { connect } from 'react-redux';

export class ExpandedListItem extends React.Component {

  condenseListItem() {
    this.props.dispatch(ContractAllItems());
  }

  render() {
    return (
      <div className="expanded list-item" id={this.props.id}>
        <div className='expanded image-container'>
          <img className='full-image'
            src={this.props.imageOne}
            alt={this.props.name}
            onClick={() => this.condenseListItem()}
          />
        </div>
        <div className='expanded name-location-container'>
          <h3> {this.props.name}</h3>
          <p>Postal code location: {this.props.postalCode}</p>
          <p>Country of origin: {this.props.countryOfOrigin}</p>
        </div>
        <div className='expanded description-container'>
          <p>{this.props.description}</p>
        </div>
        <div className='expanded button-container'>
          <button className='expanded-button'onClick={() => this.condenseListItem()}>close</button>
        </div>
      </div>
    );
  }
};

export default connect()(ExpandedListItem);