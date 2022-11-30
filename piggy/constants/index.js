export const PIGGY_ADDRESS = "0xee57018FD862B2abD1d0a37F47553CB6f3BD8058"
export const PIGGY_ABI = [
    {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"depositEth","outputs":[],"stateMutability":"payable","type":"function"},
    {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"_depositId","type":"uint256"},
    {"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_depositTime","type":"uint256"},
    {"internalType":"uint256","name":"_unlockTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ethersIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"ethersOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalanceInEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"getBalanceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDepositsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"getEthDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"lockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minutes","type":"uint256"}],"name":"setCustomUnlockTimeInMinutes","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"setNewOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"setUnlockTimeToOneYear","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setUnlockTimeToTenDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setUnlockTimeToTenMinutes","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"setUnlockTimeToTenMonths","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[{"internalType":"uint256","name":"_depositId","type":"uint256"}],"name":"withdrawEthFromDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"stateMutability":"payable","type":"receive"}
]