/**
 * @module botbuilder-dialogs-adaptive
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { ActivityTypes } from 'botbuilder';
import { Dialog } from 'botbuilder-dialogs';
import { OnActivity } from './onActivity';

/**
 * Actions triggered when a HandoffActivity is received.
 */
export class OnHandoffActivity extends OnActivity {
    public static $kind = 'Microsoft.OnHandoffActivity';

    /**
     * Initializes a new instance of the [OnHandoffActivity](xref:botbuilder-dialogs-adaptive.OnHandoffActivity) class.
     *
     * @param actions Optional. A [Dialog](xref:botbuilder-dialogs.Dialog) list containing the actions to add to the plan when the rule constraints are met.
     * @param condition Optional. Condition which needs to be met for the actions to be executed.
     */
    public constructor(actions: Dialog[] = [], condition?: string) {
        super(ActivityTypes.Handoff, actions, condition);
    }
}
