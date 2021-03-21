import Taro, { PureComponent } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./handle_button.scss";
import React from "react";
type PAGE_STATE = {
    btn_class: any;
    btn_status: boolean;
    btn_options_class: any;
};
interface MYPROPS {
    onTrigger: (index) => any;
}
export default class HandleButton extends PureComponent<MYPROPS, PAGE_STATE> {
    constructor(props) {
        super(props);
        this.state = {
            btn_class: "handle-button-image",
            btn_options_class: "handle-button-options",
            btn_status: false
        };
    }
    buttonClick = () => {
        this.setState(
            {
                btn_status: !this.state.btn_status
            },
            () => {
                this.setState({
                    btn_class: this.state.btn_status
                        ? "handle-button-image-open"
                        : "handle-button-image",
                    btn_options_class: this.state.btn_status
                        ? "handle-button-options-active"
                        : "handle-button-options"
                });
            }
        );
    };
    optionsClick = (index: any) => {
        this.props.onTrigger(index);
    };
    render() {
        const button = (
            // 主按钮
            <View style="width:100%;height:100%">
                <View className="handle-button-main">
                    <Image
                        onClick={this.buttonClick}
                        className={this.state.btn_class}
                        src={''}
                    // require("@images/shuoshuo/main-btn.png")
                    ></Image>
                </View>


                {/* 子按钮 */}
                <View className={this.state.btn_options_class}>
                    <Image
                        onClick={this.optionsClick.bind(this, 0)}
                        src={''}
                    // src={require("@images/shuoshuo/shuoshuo_btn_write@2x.png")}
                    ></Image>
                    <Image
                        onClick={this.optionsClick.bind(this, 1)}
                        src={''}
                    // src={require("@images/shuoshuo/shuoshuo_btn_refresh@2x.png")}
                    ></Image>
                    <Image
                        onClick={this.optionsClick.bind(this, 2)}
                        src={''}
                    // src={require("@images/shuoshuo/shuoshuo_btn_top@2x.png")}
                    ></Image>
                </View>
            </View>
        );


        return <View className="handle-button">{button}</View>;
    }
}