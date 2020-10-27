const SimpleToken = artifacts.require('SimpleToken')
const web3 = require('web3')

module.exports = (deployer) => {
    deployer.deploy(SimpleToken, web3.utils.toWei('1000','ether'))
}