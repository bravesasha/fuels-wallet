import { Address, Provider, bn } from 'fuels';
import { TxService } from '~/systems/Transaction/services';

function getAddressFromString(address: string) {
  return address.length > 66
    ? Address.fromPublicKey(address)
    : Address.fromString(address);
}

export const getMockedTransaction = async (
  destiny: string,
  providerUrl: string
) => {
  const destinyAddress = getAddressFromString(destiny);
  const provider = await Provider.create(providerUrl);
  const transactionRequest = await TxService.createTransfer({
    to: destinyAddress.toString(),
    amount: bn.parseUnits('0.1'),
    assetId: provider.getBaseAssetId(),
  });

  return transactionRequest;
};
