import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Navbar from './Components/Navbar';
import DaiToken from './contract/DaiToken.json';
import DappToken from './contract/DappToken.json';
import TokenFarm from './contract/TokenFarm.json';
import Main from './Components/Main';


class App extends Component{

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts()
    this.setState({ account : accounts[0]})

    const networkId = await web3.eth.net.getId()

    //load Dai Token
    const daiTokenData = DaiToken.networks[networkId];
    if(daiTokenData){
      const daiToken = new web3.eth.Contract(DaiToken.abi, daiTokenData.address)
      this.setState({daiToken})
      let daiTokenBalance = await daiToken.methods.balanceOf(this.state.account).call()
      this.setState({ daiTokenBalance : daiTokenBalance.toString()})
      console.log({balance: daiTokenBalance})
    } else {
      window.alert('DaiToken contract not deployed to detected network.')
    }

    //load Dapp Token
    const dappTokenData = DappToken.networks[networkId];
    if(dappTokenData){
      const dappToken = new web3.eth.Contract(DappToken.abi, dappTokenData.address) 
      this.setState({dappToken})
      let dappTokenBalance = await dappToken.methods.balanceOf(this.state.account).call()
      this.setState({ dappTokenBalance : dappTokenBalance.toString()})
      console.log({balance: dappTokenBalance})
    } else {
      window.alert('DaiToken contract not deployed to detected network.')
    }


    //load Token Farm
    const tokenFarmData = TokenFarm.networks[networkId];
    if(tokenFarmData){
      const tokenFarm = new web3.eth.Contract(TokenFarm.abi, tokenFarmData.address) 
      this.setState({tokenFarm})
      let stakingBalance = await tokenFarm.methods.stakingBalance(this.state.account).call()
      this.setState({ stakingBalance : stakingBalance.toString()})
      console.log({balance: stakingBalance})
    } else {
      window.alert('DaiToken contract not deployed to detected network.')
    }
    this.setState({ loading : false})
  }

  //load web3
  async loadWeb3(){
    if (window.ethereum) {
       window.web3 = new Web3(window.ethereum);
       await window.ethereum.enable();
     } else if (window.web3) {
       window.web3 = new Web3(window.web3.currentProvider);
     } else {
       window.alert(
         "Non-Ethereum browser detected. You should consider trying MetaMask!"
       );
     }
 }

  
  constructor(props){
    super(props)
    this.state = {
      account : '',
      daiToken : {},
      dappToken : {},
      tokenFarm : {},
      daiTokenBalance: '0',
      dappTokenBalance: '0',
      stakingBalance: '0',
      loading : true
    }
  }

  render(){
    let content
    if(this.state.loading){
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      content = <Main
        daiTokenBalance={this.state.daiTokenBalance}
        dappTokenBalance={this.state.dappTokenBalance}
        stakingBalance={this.state.stakingBalance}
        // stakeTokens={this.stakeTokens}
        // unStakeTokens={this.unStakeTokens}
      />
    }
    return (
      <div  className=''>
        <Navbar account={this.state.account} />
        <div className="container fluid mt-5  ">
          <div className="row justify-content-center">
            <main role="main" className="col-lg-12 ml-auto mr outo" style={{  maxWidth: '600px'}}>
              <div className="content mr-auto ml-auto">
                <a 
                  href="http://localhost:3000/"
                  trarget="_blanck"
                  rel="noopener noreffer"
                  ></a>
                  {content}
              </div>
            </main>
          </div>
        </div>
      </div>
  );
}
}

export default App;
