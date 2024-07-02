/**
 * Zendesk messaging Web Widget SDK
 * https://developer.zendesk.com/api-reference/widget-messaging/introduction/
 */
interface ZendeskMessagingWidget {
  /**
   * If your application has a login flow, or if a user needs to access the same conversation from multiple devices,
   * you can use the `loginUser` API.
   *
   * You can associate users with your own user directory by issuing a `JWT` credential during the login flow.
   * For information on creating signing keys, see
   * [Authenticating end users in messaging](https://support.zendesk.com/hc/en-us/articles/4411666638746).
   * For information on creating JWT tokens, see
   * [Enabling authenticated visitors for messaging with Zendesk SDKs](https://developer.zendesk.com/documentation/zendesk-web-widget-sdks/sdks/web/enabling_auth_visitors).
   *
   * ## Expiring JWTs
   * If you want to generate credentials that expire after a certain amount of time, using JWTs is a good way to
   * accomplish this.
   *
   * The `exp` (expiration time) property of a JWT payload is honored by the messaging Web Widget.
   * A request made with a JWT which has an `exp` that is in the past is rejected.
   *
   * Keep in mind that using JWTs with `exp` means you need to handle regeneration of JWTs in the function that you
   * provide when calling the `loginUser` API.
   */
  (
    type: "messenger",
    command: "loginUser",
    callback: (fn: (newJwtForUser: string) => void) => void
  ): void;

  /**
   * Your app may have a logout function that brings users back to a login screen. In this case, revert the messaging
   * Web Widget to a pre-login state by calling the `logoutUser` API.
   *
   * After a user is logged out, all conversation tags and conversation fields data is cleared.
   * Use the Conversation Fields and Tags API again to apply conversation fields and tags data to a new conversation.
   */
  (type: "messenger", command: "logoutUser"): void;

  /**
   * Displays the widget on the host page in the state it was in before it was hidden.
   * The widget is displayed by default on page load.
   * You don't need to call `show` to display the widget unless you use `hide`.
   */
  (type: "messenger", command: "show"): void;

  /**
   * Hides all parts of the widget from the page. You can invoke it before or after page load.
   */
  (type: "messenger", command: "hide"): void;

  /**
   * Opens the messaging Web Widget.
   */
  (type: "messenger", command: "open"): void;

  /**
   * Closes the messaging Web Widget.
   */
  (type: "messenger", command: "close"): void;

  /**
   * Executes a callback when the messaging Web Widget opens.
   */
  (type: "messenger:on", event: "open", callback: () => void): void;

  /**
   * Executes a callback when the messaging Web Widget closes.
   */
  (type: "messenger:on", event: "close", callback: () => void): void;

  /**
   * Executes a callback when the number of unread messages changes.
   */
  (
    type: "messenger:on",
    event: "unreadMessages",
    callback: (unreadMessageCount: number) => void
  ): void;

  /**
   * Sets the locale of the messaging Web Widget.
   * It overrides the messaging Web Widget's default behavior of matching the same language an
   * end user has set in their web browser.
   *
   * The command takes a locale string as an argument.
   * For a list of supported locales and associated codes, use the following Zendesk public REST API endpoint:
   * https://support.zendesk.com/api/v2/locales/public.json.
   *
   * **Note:** This code should be placed immediately after the messaging Web Widget code snippet.
   */
  (type: "messenger:set", setting: "locale", newLocale: string): void;

  /**
   * Sets the CSS property z-index on all the iframes for the messaging Web Widget.
   *
   * When two elements overlap, the z-index values of the elements determine which one covers the other.
   * An element with a greater z-index value covers an element with a smaller one.
   *
   * By default, all iframes in the messaging Web Widget have a z-index value of `999999`.
   */
  (type: "messenger:set", setting: "zIndex", newZIndex: number): void;

  /**
   * The messaging Web Widget uses a mixture of cookies as well as local and session storage in order to function.
   *
   * If the end user has opted out of cookies, you can use the command below to let the messaging
   * Web Widget know that it is unable to use any of these storage options.
   *
   * Currently, disabling cookies will result in the messaging Web Widget being hidden from the end user
   * and all values in local and session storage being deleted.
   */
  (type: "messenger:set", setting: "cookies", isEnabled: boolean): void;

  /**
   * Allows values for conversation fields to be set in the client to add contextual data about the conversation.
   * To learn more about Messaging Metadata, see
   * [Introduction to Messaging Metadata](https://support.zendesk.com/hc/en-us/articles/5868905484442).
   *
   * Conversation fields must first be created as custom ticket fields and configured to allow their values to be
   * set by end users in Admin Center. To use conversation fields, see
   * [Using Messaging Metadata with the Zendesk Web Widget and SDKs](https://support.zendesk.com/hc/en-us/articles/5658339908378).
   *
   * **Note**: Conversation fields aren't immediately associated with a conversation when the API is called.
   * It'll only be applied when end users start a conversation or send a message in an existing conversation
   * from the page it's called from.
   *
   * [System ticket fields](https://support.zendesk.com/hc/en-us/articles/4408886739098), such as the Priority field,
   * are not supported.
   *
   * Conversation fields are cleared when the
   * [authentication API](https://developer.zendesk.com/api-reference/widget-messaging/web/authentication/#logout)
   * to sign-out is called. The `conversationFields` API needs to be called again to apply field metadata to a fresh
   * conversation.
   */
  (
    type: "messenger:set",
    setting: "conversationFields",
    conversationFields: {
      id: string;
      value: string | number | boolean;
    }[]
  ): void;

  /**
   * Allows custom conversation tags to be set in the client to add contextual data about the conversation.
   * To learn more about Messaging Metadata, see
   * [Introduction to Messaging Metadata](https://support.zendesk.com/hc/en-us/articles/5868905484442).
   *
   * Conversation tags do not need any prerequisite steps before the API can be used. To use conversation tags, see
   * [Using Messaging Metadata with the Zendesk Web Widget and SDKs](https://support.zendesk.com/hc/en-us/articles/5658339908378).
   *
   * **Note:** Conversation tags aren't immediately associated with a conversation when the API is called.
   * It'll only be applied when end users start a conversation or send a message in an existing conversation
   * from the page it's called from.
   *
   * Conversation tags are cleared when the
   * [authentication API](https://developer.zendesk.com/api-reference/widget-messaging/web/authentication/#logout)
   * to sign-out is called. The `conversationTags` API needs to be called again to apply tag metadata to a fresh
   * conversation.
   */
  (
    type: "messenger:set",
    setting: "conversationTags",
    conversationTags: string[]
  ): void;
}

interface Window {
  zE?: ZendeskMessagingWidget;
}
