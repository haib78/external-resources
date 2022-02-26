const ZQrobot202 = formatMessage => ({
    name: 'ZQrobot202',
    extensionId: 'ZQrobot202',
    version: '0.0.1',
    supportDevice: ['ZQ202','arduinoEsp32'],
    description: formatMessage({
        id: 'oled.description',
        default: 'I2C oled display based on SSD1306 drivers.'
    }),
    author: 'haib78',
    iconURL: `asset/oled.png`,
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['ZQrobot'],
    //helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = ZQrobot202;
