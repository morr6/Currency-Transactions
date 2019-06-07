import React, {Component} from 'react';
import { HeaderWrapper, EuroRateWrapper } from './header.s';
import { isApiLoading, setPlnRate } from '../../Utilities/actions/currencyActionList'
import { connect } from 'react-redux';
import { plnRate } from '../../Utilities/api/currencyApi';
import { Buttons } from './buttons/buttons';

export class HeaderPure extends Component {

  fetchApi() {
    this.props.isApiLoading();

    plnRate.fetchApi()
    .then(
      (result) => {
        this.props.setPlnRate(result.rates.PLN.toFixed(2))
        this.props.isApiLoading();  
      },
      (error) => {
        console.log(error)
        this.props.isApiLoading()
      }
    )
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    return (
      <HeaderWrapper>
        <Buttons />

        <EuroRateWrapper>
          1€ = {this.props.plnRate}PLN
        </EuroRateWrapper>

      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => ({
  apiLoading: state.apiLoading,
  plnRate: state.plnRate

});

const mapDispatchToProps = dispatch => ({
  isApiLoading: apiLoading => dispatch(isApiLoading(apiLoading)),
  setPlnRate: plnRate => dispatch(setPlnRate(plnRate))
});

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderPure)