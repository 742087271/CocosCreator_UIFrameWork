import UISwiper_Auto from "../AutoScripts/UISwiper_Auto";
import { UIScreen } from "../UIFrame/UIForm";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIECSView extends UIScreen {

    view: UISwiper_Auto;
    // onLoad () {}
    items: cc.Node[] = [];
    @property({type:cc.Float,tooltip:"移动速度",name:"moveSpeed"})
    moveSpeed = 0;
    @property({type:cc.Float,tooltip:"间距",name:"spacingX"})
    spacingX = 0;
    _leftX = 0;
    _rightX = 0;

    start() {
        let content = this.view.Scroll.content;
        this.items = content.children;
        const right = this.items[0].x;
        const half = content.width / 2;

        console.log(this.spacingX);
        
        this.items.forEach((node,index) => {
            node.x = -index * node.width - this.spacingX * index;;   
            console.log(node.x);
                     
        })
        this._leftX = -half + content.children[0].width*content.children.length;
        this._rightX = half + this.items[0].width/2 + this.spacingX;
    }
    protected update(dt: number): void {
        console.log(this.moveSpeed);
        const idx = this.items.length -1
        const moveX = this.moveSpeed * dt;
        for (const e of this.items) {
            e.x += moveX;
            if (e.x >= this._rightX) {
                e.x = -this._leftX + e.width/2 - this.spacingX*idx;
            }
        }
    }
    // update (dt) {}
}
