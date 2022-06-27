Example on how to copy files (or a directory in this case), and how to restart TwinCAT from TwinCAT HMI. 

1. Here two variants are deffined. "Model_1", and "Model_2".
  ![image](https://user-images.githubusercontent.com/19829308/176049475-9cf60d35-27a1-4b02-9603-fc25ca56d0db.png)

2. The option "Variant specific local boot folder ("_Boot")" is set to true.
![image](https://user-images.githubusercontent.com/19829308/176049537-b4906f9f-bbde-4111-aae0-e29acaaed628.png)

3. After building the soultion for each variant, you will find variant specific boot folders in the "_boot" folder.

4. Transfering of the "_boot" folder to the target system is done using the deployment options in the PLC. On activate configuration, all variant specific boot folders get transfered to "C:\TwinCAT\3.1\Target\Resource\Variants"
![image](https://user-images.githubusercontent.com/19829308/176049940-1fa3b5df-9f9c-44fe-bd5c-5fc2b24849e0.png)

5. A TwinCAT HMI virtual directory is added to the REMOTE configuration.
![image](https://user-images.githubusercontent.com/19829308/176050721-cc999802-3c7a-4270-a977-d898e95d2460.png)

6. The TwinCAT system service (port 10000) is added as a runtime target to the ADS server extension.
![image](https://user-images.githubusercontent.com/19829308/176050920-8257be84-90f3-422b-a7dd-446ee6b4a8e2.png)

7. From the HMI, a button is pressed. This calls the HMI server file copy, and restarts TwinCAT. See wrapper functions in the "CodeBehind" folder.
![image](https://user-images.githubusercontent.com/19829308/176051246-ca94840d-9da2-4c48-87e2-7c82c92a23ba.png)


This sample is created by [Beckhoff Automation LLC.](https://www.beckhoff.com/en-us/), and is provided as-is under the Zero-Clause BSD license.

# How to get support

Should you have any questions regarding the provided sample code, please contact your local Beckhoff support team. Contact information can be found on the official Beckhoff website at https://www.beckhoff.com/en-us/support/.

# Further Information

- Further Information:
[Variant Management](https://infosys.beckhoff.com/content/1033/variant_management/6325752587.html?id=7757886651100592252)
[PLC Deployment](https://infosys.beckhoff.com/content/1033/tc3_plc_intro/3260050187.html?id=1675861973834834662)

## Requirements

The following components must be installed to run sample code:
- [TE1000 TwinCAT 3 Engineering](https://www.beckhoff.com/en-en/products/automation/twincat/te1xxx-twincat-3-engineering/te1000.html) version 3.1.4024.0 or higher
- [TE2000 TwinCAT HMI](https://www.beckhoff.com/en-us/support/download-finder/software-and-tools/software-download/index.aspx?file=TE2000-HMI-Engineering.exe)
- [TF2000 TwinCAT HMI Server](https://www.beckhoff.com/en-us/support/download-finder/software-and-tools/software-download/index.aspx?file=TF2000-HMI-Server.exe)
