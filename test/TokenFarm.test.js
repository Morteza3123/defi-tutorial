const DappToken = artifacts.require('DappToken');
const DaiToken = artifacts.require('DaiToken');
const TokenFarm = artifacts.require('TokenFarm');

require('chai')
        .use(require('chai-as-promised'))
        .should()

contract('TokenFarm', (accounts) => {

    describe('Mock DAI deployment', async () => {
        it('has a name', async () => {
            let daiToken = await DaiToken.new()
            const name = daiToken.name()
            assert.equal(name, 'Mock DAI Token')
        })
    })

})