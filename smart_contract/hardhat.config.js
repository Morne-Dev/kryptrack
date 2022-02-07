
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bDAFpfeDVfPQW1J-w7tRcjC0qcwDwCm3',
      accounts: [ '10627a538575b245007229871838d51b14831a88a3bfc67800cf1dc77110ea54' ]
    }
  }
}