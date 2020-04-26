import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const state = { active: false };
  let disposable = vscode.commands.registerCommand("TS-CheckMyJS.enableTSCheck",() => {
      state.active = !state.active;
      tsCheck(state.active);
    }
  );
  context.subscriptions.push(disposable);
}

const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 500);

function tsCheck(active: boolean) {
  vscode.workspace
    .getConfiguration()
    .update("javascript.implicitProjectConfig.checkJs", active, vscode.ConfigurationTarget.Global);
    statusBarItem.text = active ? `$(flame) TS-Check ON` :`$(chrome-close) TS-Check OFF`;
    statusBarItem.show();
}

export function deactivate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "TS-CheckMyJS.disableTSCheck",
    () => {
      vscode.window.showInformationMessage("Thank you for using TS-Check!");
    }
  );
  context.subscriptions.push(disposable);
}
