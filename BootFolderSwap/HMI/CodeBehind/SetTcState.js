// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.756.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var HMI;
        (function (HMI) {
            function SetTcState(AdsState, runtime) {

                TcHmi.Server.writeSymbol(
                    "ADS.AdsSyncWriteControlReq",
                    {
                        Runtime: runtime, // name of the runtime
                        AdsState: AdsState, // state of ADS --> see Infosys --> 5 = run
                        DeviceState: 0, // set the device state
                        WriteData: btoa("") // empty write data base64 encoded
                    }, console.log); // log the callback

            }
            HMI.SetTcState = SetTcState;
        })(HMI = Functions.HMI || (Functions.HMI = {}));
        Functions.registerFunctionEx('SetTcState', 'TcHmi.Functions.HMI', HMI.SetTcState);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);