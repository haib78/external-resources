/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="显示器" id="OLED_CATEGORY" colour="#C0C0C0" secondaryColour="#A9A9A9">
    <block type="oled_refresh" id="oled_refresh">
    </block>
    <block type="oled_refresh">
        <statement name="DO">
        <block type="oled_print" id="oled_print">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello Robot</field>
            </shadow>
        </value>
    </block>
        </statement>
    </block>
    <block type="oled_print" id="oled_print">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello Robot</field>
            </shadow>
        </value>
    </block>
</category>
<category name="电机" id="moto_CATEGORY" colour="#C0C0C0" secondaryColour="#A9A9A9">
    <block type="zq202motoInit" id="zq202motoInit">
        <field name="pin_m1">0</field>
        <value name="pin_m1_val">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <field name="pin_m2">1</field>
        <value name="pin_m2_val">
            <shadow type="math_number">
                <field name="NUM">-100</field>
            </shadow>
        </value>
    </block>
    <block type="zq202moto" id="zq202moto">
        <field name="pin_m">0</field>
        <value name="pin_m_val">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="zq202runmoto" id="zq202runmoto">
        <value name="pin_m1_val">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="pin_m2_val">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    
</category>`;
}

exports = addToolbox;
