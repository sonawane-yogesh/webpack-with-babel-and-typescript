var globalAny: any = globalThis;
export default class MessageService {
    private bootBox: any = globalAny.bootbox;
    private readonly id: string;
    constructor(id?: string) {
        this.id = id;
    }
    _defaults: any = { s: "green", w: "#fcf8e3", i: "#d9edf7", e: "red", d: "green" };
    inlineMessage(msg: string, type: string) {
        var id: string = this.id;
        var color: string = this._defaults[type] || this._defaults["d"];
        var control = document.getElementById(id);
        if (!control) return;
        control.innerHTML = "";
        control.style["color"] = color;
        control.innerHTML = msg;
    }
    showMessage(id: string, msg: string, type: string) {
        if (!id) return;
        var color: string = this._defaults[type] || this._defaults["d"];
        var control = document.getElementById(id);
        if (!control) return;
        control.innerHTML = "";
        control.style["color"] = color;
        control.innerHTML = msg;
    }
    messageWithReplace(id: string, msg: string, type: string) {
        if (!id) return;
        var color: string = this._defaults[type] || this._defaults["d"];
        var control = document.getElementById(id);
        if (!control) return;
        control.innerHTML = "";
        control.style["color"] = color;
        control.innerHTML = msg;
    }
    alertMessage(msg: string) {
        alert(msg);
    }
    bootboxAlert(msg: string, cb: Function) {
        this.bootBox.alert({
            message: msg,
            callback(c: any) {
                if (typeof cb === "function") cb(c);
            }
        });
    }
    bootboxConfirm(title: string, msg: string, cb: Function) {
        this.bootBox.confirm({
            title: title,
            message: msg,
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> Cancel'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Confirm'
                }
            },
            callback(result: any) {
                cb(result);
            }
        });
    }
    bootboxLoading(title: string): any {
        var dialog: any = this.bootBox.dialog({
            title: title,
            message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
        });
        return dialog;
    }
}