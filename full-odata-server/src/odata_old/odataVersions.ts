import v1 = require('./odataV1');
import v2 = require('./odataV2');
import v3 = require('./odataV3');
import v4 = require('./odataV4');

export class ODataVersions {
    static Create(version: number): IODataVersion {
        switch (version) {
            case 1:
                return new v1.ODataV1();
            case 2:
                return new v2.ODataV2();
            case 3:
                return new v3.ODataV3();
            case 4:
                return new v4.ODataV4();
            default:
                break;
        }
    }
}

export interface IODataVersion {

}