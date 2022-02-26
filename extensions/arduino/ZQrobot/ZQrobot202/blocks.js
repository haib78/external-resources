/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#9966FF';
    const secondaryColour = '#774DCB';

    Blockly.Blocks.oled_print = {
        init: function () {
            this.jsonInit({
                message0: '设置屏幕打印 %1 %2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            ['换行', 'warp'],
                            ['不换行', 'noWarp']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_refresh = {
        init: function () {
            this.jsonInit({
                message0:'设置显示屏刷新',
                message1: "%1", // Statement
                args1: [
                  {
                    "type": "input_statement",
                    "name": "DO"
                  }
                ],
                "tooltip": "显示-OLED-刷新页面",
                colour:colour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.zq202motoInit = {
        init: function () {
            this.jsonInit({
                message0:'初始化 左电机端口 %1 功率 %2 右电机端口 %3 功率 %4',
                args0: [
                  {
                    type: 'field_dropdown',
                    name: 'pin_m1',
                    options: [
                        ['M1', '0'],
                        ['M2', '1']
                    ]
                  },
                  {
                    type: 'input_value',
                    name: 'pin_m1_val'
                  },
                  {
                    type: 'field_dropdown',
                    name: 'pin_m2',
                    options: [
                        ['M1', '0'],
                        ['M2', '1']
                    ]
                  },
                  {
                    type: 'input_value',
                    name: 'pin_m2_val'
                  }
                ],
                "tooltip": "设置电机初始化",
                colour:colour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.zq202moto = {
        init: function () {
            this.jsonInit({
                message0:'设置电机 %1 速度 %2 ',
                args0: [
                  {
                    type: 'field_dropdown',
                    name: 'pin_m',
                    options: [
                        ['M1', '0'],
                        ['M2', '1']
                    ]
                  },
                  {
                    type: 'input_value',
                    name: 'pin_m_val'
                  }
                ],
                "tooltip": "设置电机速度",
                colour:colour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.zq202runmoto = {
        init: function () {
            this.jsonInit({
                message0:'设置 左电机速度 %1 右电机速度 %2 ',
                args0: [
                  {
                    type: 'input_value',
                    name: 'pin_m1_val'
                  },
                  {
                    type: 'input_value',
                    name: 'pin_m2_val'
                  }
                ],
                "tooltip": "设置电机速度",
                colour:colour,
                extensions: ['shape_statement']
            });
        }
    };
    
    return Blockly;
}

exports = addBlocks;
