import * as vscode from "vscode";

export async function activate(context: vscode.ExtensionContext): Promise<void> {
    context.subscriptions.push(
      vscode.languages.registerInlineCompletionItemProvider(
        { scheme: "file", language: "ansible" },
        new SampleInlineSuggestionProvider()
      )
    );
}

export class SampleInlineSuggestionProvider
  implements vscode.InlineCompletionItemProvider
{
    provideInlineCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        context: vscode.InlineCompletionContext,
        token: vscode.CancellationToken
        ): vscode.ProviderResult<vscode.InlineCompletionItem[] | vscode.InlineCompletionList> {
        const result: vscode.InlineCompletionList = {
            items: [],
        };

        if (position.line === 5 && position.character === 4) {
            const text = "**** I'm not a pilot ****";
            result.items.push({
                insertText: text
            });
        }

        return result;
    }
}
