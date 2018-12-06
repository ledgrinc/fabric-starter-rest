const fs = require('fs');

const myorg = process.env.ORG || 'org1';
const DOMAIN = process.env.DOMAIN || 'example.com';

const devCryptoConfigDir = '../fabric-starter/crypto-config';
const cryptoConfigDir = fs.existsSync(devCryptoConfigDir) ? devCryptoConfigDir : process.env.CRYPTO_CONFIG_DIR;

const enrollId = process.env.ENROLL_ID || 'admin';
const enrollSecret = process.env.ENROLL_SECRET || 'adminpw';

// default to peer0.org1.example.com:7051 inside docker-compose or export ORGS='{"org1":"peer0.org1.example.com:7051","org2":"peer0.org2.example.com:7051"}'
let orgs = process.env.ORGS || '"org1":"localhost:7051"';
let cas = process.env.CAS || '"org1":"localhost:7054"';

const ORDERER_MSP_DIR = `${cryptoConfigDir}/ordererOrganizations/${DOMAIN}/msp`;

const ordererAddr = `orderer.${DOMAIN}:7050`;

const systemChannelId="orderer-system-channel";

module.exports = {
    domain: DOMAIN,
    myorg: myorg,

    enrollId: enrollId,
    enrollSecret: enrollSecret,
    orgs: orgs,
    cas: cas,

    ORDERER_MSP_DIR: ORDERER_MSP_DIR,
    ORDERER_ADDR: ordererAddr,

    systemChannelId: systemChannelId,
    INVOKE_RETRY_COUNT: process.env.INVOKE_RETRY_COUNT || 10

};
