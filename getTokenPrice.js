const { ethers } = require("ethers");
const ADDRESS = "0x7a250d5630b4cf539739df2c5dacb4c659f2488d";

const ABI = [
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
];

const provider = new ethers.JsonRpcProvider(
    process.env.INFURA_KEY
);

const amountIn = ethers.parseEther("1");

const path = [
  "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
];

const router = new ethers.Contract(ADDRESS, ABI, provider);

const main = async () => {
  const amounts = await router.getAmountsOut(amountIn, path);
  const price = ethers.formatUnits(amounts[1].toString(), 6);
  console.log("price", price);
};

main();
