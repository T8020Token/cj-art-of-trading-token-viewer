import { useState } from 'react';
import { Browser } from '@capacitor/browser';

function InputForm() {
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');

  const isValidWalletAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address.trim());
  };

  const handleSubmit = async () => {
    setError('');
    if (!isValidWalletAddress(walletAddress)) {
      setError('Please enter a valid Ethereum wallet address (e.g., 0x...)');
      return;
    }
    await Browser.open({ url: `https://opensea.io/${walletAddress}` });
  };

  return (
    <div>
      <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700">
        Enter Your Wallet Address
      </label>
      <input
        type="text"
        id="walletAddress"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        placeholder="e.g., 0x1234...5678"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
      >
        View NFTs
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

export default InputForm;