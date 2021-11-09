import React, { Component } from 'react';
import dai from '../dai.png';


class Main extends Component{

 

  render(){
    return (
      <div id='content' className='mt-3'>
          <table className="table  table-borderless  text-muted  text-center">
              <thead>
                  <tr>
                      <th scope="col">Staking Balance</th>
                      <th scope="col">Reward Balance</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDai</td>
                      <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} Dapp</td>
                  </tr>
              </tbody>
          </table>


          <div className="card mb-4">
              <div className="card-body">

                  <form className="mb3">
                      <div>
                          <label className="float-left"><b>Stake Tokens</b></label>
                          <span className="float-right text-muted">
                              Balance : {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                          </span>
                      </div>
                      <div className="input groupe mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="0"
                            required />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <img src={dai} height="32" alt=""/>
                                &nbsp;&nbsp;&nbsp;  mDai
                            </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-parimary  btn-block  btn-lg">Stake</button>
                  </form>
              </div>
          </div>
      </div>
  );
}
}

export default Main;