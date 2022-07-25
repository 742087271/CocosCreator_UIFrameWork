import UISwiper_Auto from "./AutoScripts/UISwiper_Auto";
import UINavigator from "./UIScript/UINavigator";
import UISwiper from "./UIScript/UISwiper";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {
    
    onLoad() {

    }

    start () {
        UISwiper.open();
    }
    
    onDestroy() {
        
    }
}