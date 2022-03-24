const ZQrobot202 = formatMessage => ({
    name: 'ZQrobot-202',
    deviceId: 'ZQrobot202_ZQ202',
    manufactor: 'QDP Robot',
    learnMore: 'https://qdprobot.taobao.com',
    iconURL: 'asset/ZQ202.png',
    description: '卓器机器人202',
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/ZQ202-illustration.svg',
    connectionSmallIconURL: 'asset/ZQ202-small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['ZQrobot'],
    deviceExtensions: ['ZQrobot202'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'http://www.qdprobot.com/'
});

module.exports = ZQrobot202;
