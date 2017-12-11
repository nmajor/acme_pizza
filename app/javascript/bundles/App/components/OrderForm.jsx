import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
// import DateTimeField from "react-bootstrap-datetimepicker";
import _ from 'lodash';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.dateFormat = "MMMM Do YYYY, h:mm:ss a";
    this.state = this.initState();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKindClick = this.handleKindClick.bind(this);
    this.handleSizeClick = this.handleSizeClick.bind(this);
  }
  initState() {
    return {
      name: null,
      phone: null,
      pizza_kind_id: null,
      size: null,
      pickup_at: moment().add(20, 'm'),
    };
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state, () => {
      this.setState(this.initState());
    });
  }
  handleKindClick(id) {
    this.setState({ pizza_kind_id: id });
  }
  handleSizeClick(size) {
    this.setState({ size: size });
  }
  handlePickupAtChange(time) {
    this.setState({ pickup_at: time });
  }
  handleInputChange(evt) {
    const newState = {};
    newState[evt.target.name] = evt.target.value
    this.setState(newState);
  }
  renderKindOption(kind) {
    const { pizza_kind_id } = this.state;
    const buttonType = kind.id === pizza_kind_id ? 'primary' : 'default';

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
    const { pickup_at, phone, name } = this.state;

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
          <label htmlFor="pickup-at">Pickup Time - {moment(pickup_at).fromNow()}</label>

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
