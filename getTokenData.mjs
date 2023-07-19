import axios from "axios";
// const axios = require("axios")

const uniswap = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

const query = `
    {

        token(id:"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984") {
            symbol
            name
            decimals
            volumeUSD
            feesUSD
            totalValueLockedUSD
            poolCount   
        }
    }
`;

export const token_data = axios.post(uniswap, { query: query }).then((result) => {
  console.log(result.data.data);
});