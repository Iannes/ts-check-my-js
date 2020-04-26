"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    const state = { active: false };
    let disposable = vscode.commands.registerCommand("TS-CheckMyJS.enableTSCheck", () => {
        state.active = !state.active;
        tsCheck(state.active);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 500);
function tsCheck(active) {
    vscode.workspace
        .getConfiguration()
        .update("javascript.implicitProjectConfig.checkJs", active, vscode.ConfigurationTarget.Global);
    statusBarItem.text = active ? `$(flame) TS-Check ON` : `$(chrome-close) TS-Check OFF`;
    statusBarItem.show();
}
function deactivate(context) {
    let disposable = vscode.commands.registerCommand("TS-CheckMyJS.disableTSCheck", () => {
        vscode.window.showInformationMessage("Thank you for using TS-Check!");
    });
    context.subscriptions.push(disposable);
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map