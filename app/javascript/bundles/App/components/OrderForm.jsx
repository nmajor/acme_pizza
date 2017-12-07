import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
// import DateTimeField from "react-bootstrap-datetimepicker";
import _ from 'lodash';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.minimumPickupTime = moment().add(20, 'm');
    this.dateFormat = "MMMM Do YYYY, h:mm:ss a";
    this.state = {
      name: null,
      phone: null,
      kindId: null,
      size: null,
      pickupAt: this.minimumPickupTime,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKindClick = this.handleKindClick.bind(this);
    this.handleSizeClick = this.handleSizeClick.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  }
  handleKindClick(id) {
    this.setState({ kindId: id });
  }
  handleSizeClick(size) {
    this.setState({ size: size });
  }
  handlePickupAtChange(time) {
    this.setState({ pickupAt: time });
  }
  handleInputChange(evt) {
    const newState = {};
    newState[evt.target.name] = evt.target.value
    this.setState(newState);
  }
  renderKindOption(kind) {
    const { kindId } = this.state;
    const buttonType = kind.id === kindId ? 'primary' : 'default';

    return (<div key={kind.id} className="btn-group" role="group">
      <button onClick={() => { this.handleKindClick(kind.id); }} type="button" className={`btn btn-${buttonType}`}>{kind.name}</button>
    </div>);
  }
  renderPizzaKindOptions() {
    const options = this.props.pizzaKindOptions.map((kind) => {
      return this.renderKindOption(kind);
    });

    return (<div className="btn-group btn-group-justified" role="group" aria-label="...">
      {options}
    </div>);
  }
  renderSizeOption(value) {
    const { size } = this.state;
    const buttonType = size === value ? 'primary' : 'default';

    return (<div key={value} className="btn-group" role="group">
      <button onClick={() => { this.handleSizeClick(value); }} type="button" className={`btn btn-${buttonType}`}>{_.capitalize(value)}</button>
    </div>);
  }
  renderSizeOptions() {
    const options = this.props.pizzaSizeOptions.map((size) => {
      return this.renderSizeOption(size);
    });

    return (<div className="btn-group btn-group-justified" role="group" aria-label="...">
      {options}
    </div>);
  }
  render() {
    const { user } = this.props;
    const { pickupAt, phone, name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input value={name || ''} onChange={this.handleInputChange} type="text" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Customer Phone Number</label>
          <input value={phone || ''} onChange={this.handleInputChange} type="text" name="phone" className="form-control" placeholder="555-555-5555" />
        </div>
        <div className="form-group">
          <label htmlFor="pizza-kind-id">Pizza Type</label>
          {this.renderPizzaKindOptions()}
        </div>
        <div className="form-group">
          <label htmlFor="pizza-size">Pizza Size</label>
          {this.renderSizeOptions()}
        </div>
        <div className="form-group">
          <label htmlFor="pickup-at">Pickup Time - {moment(pickupAt).fromNow()}</label>

        </div>
        <div className="form-group">
          <button className="btn btn-success btn-block" type="submit">Submit</button>
        </div>
      </form>
    );
    // <DateTimeField
    //   dateTime={pickupAt}
    //   inputFormat={this.dateFormat}
    //   inputDisplayFormat={this.dateFormat}
    //   onChange={this.handlePickupAtChange}
    //   showToday={true}
    // />
  }
}
export default OrderForm;
