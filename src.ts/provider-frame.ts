import { JsonRpcApiProviderOptions, JsonRpcProvider, Networkish } from "ethers";

export class FrameProvider extends JsonRpcProvider {

    constructor(network?: Networkish, options?: JsonRpcApiProviderOptions) {
        options = {...options, batchMaxCount: 1}
        super('http://127.0.0.1:1248', network, options);
    }
}