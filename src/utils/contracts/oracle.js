export default [
  {
    name: "YearnChainlinkOracleV2",
    id: 1,
    contractChain: "0x13881",
    address: "0x6cc0cd7D25E291029B55C767B9A2D1d9A18Ae668",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
          { internalType: "address", name: "yearnVault", type: "address" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "ChainlinkOracleV2",
    id: 2,
    contractChain: "0x13881",
    address: "0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
];
