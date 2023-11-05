# NotificationBar

NotificationBar renders the NotificationBar component and takes care of the the basic layout as per the Amway design guide. Most of the changeable aspects can be passed through props to customize the appearance.

### Inclusion

```ts
import { NotificationBar, NotificationBarPropTypes, LinkTarget } from '@nextgen-web-framework/all';
import '@nextgen-web-framework/all/NotificationBar.css';

return <NotificationBar />;
```

### Required Props

| Name    | Description                                  | Default value | Variable |
| ------- | -------------------------------------------- | ------------- | -------- |
| message | message to be displayed in notification bar. | ''            | string   |

### Optional Props

| Name                | Description                                           | Default value    | Variable   |
| ------------------- | ----------------------------------------------------- | ---------------- | ---------- | ------------ | ------ |
| icon                | Custom icon to show on right side of notification bar | faClose          | IconLookup |
| linkText            | text to display in Text Link                          | ''               | string     |
| linkRedirect        | Link to redirect to in Text Link                      | ''               | string     |
| linkTarget          | Open Link in same or new window                       | LinkTarget.BLANK | LinkTarget |
| theme               | it defines the style of notification info             |                  | purple     | Theme.purple | string |
| isCloseIconRequired | close icon required or not for notification bar       | true             | boolean    |
| ctaLabel            | text i.e. reload page also show more set false        | ''               | string     |
| ctaClickHandler     | callback to set to define action required             | ()=> Void        | boolean    |
| iconClickHandler    | click action handler for icon                         | ()=>0            | Function   |
| isShowMore          | boolean to define showmor functionality               | true             |
| boolean             |

### Storybook

[link to storybook](https://amway.chromatic.com/test?appId=6464aeb0a2244603ae7f7243&id=64fc1e7b0d37304baf3ed165)
