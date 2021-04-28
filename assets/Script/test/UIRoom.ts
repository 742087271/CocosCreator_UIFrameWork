import UIBase from "../UIFrame/UIBase";
import AdapterMgr, { AdaptaterType } from "../UIFrame/AdapterMgr";
import { FormType } from "../UIFrame/config/SysDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIRoom extends UIBase {

    ClickMaskClose = false;
    formType = FormType.Fixed;

    static prefabPath = "UIForms/UIRoom";

    // onLoad () {}

    start () {
        AdapterMgr.inst.adapatByType(AdaptaterType.Right, this.node, 20);
    }

    // update (dt) {}
}
