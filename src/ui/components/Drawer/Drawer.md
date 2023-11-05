# Drawer

Provides Drawer UI Component with custom event callback. It is expanded version of Drawer.

There are two different view for mobile and desktop. Based on different viewport , DIfferent types of drawer will be shown.

### Inclusion

```ts
import { Drawer, DrawerDirections } from '@nextgen-web-framework/all';

return (
  <Drawer
    footer={<div>Footer</div>}
    header={<div>Product Details</div>}
    closeIcon={true}
    onClose={() => setDrawer(false)}
  />
);
```

### Required Props

| Name     | Description                |
| -------- | -------------------------- |
| children | display body inside drawer |

Note:- `<Checkbox />` take all HTML input[type='checkbox'] tag attributes and events like- checked, etc.

### Optional Props

| Name                 | Description                                           | Default value |
| -------------------- | ----------------------------------------------------- | ------------- |
| header               | user can pass html to display drawer header           | none          |
| footer               | user can pass html to display drawer footer           | none          |
| closeIcon            | to display close icon                                 | false         |
| closeOnBackdropClick | user can close drawer on backdrop click event         | false         |
| onClose              | accepts a callback triggered on close event           | ()=>{}        |
| bottomGap            | user can pass different bottom gap to position drawer | 68px          |
| drawerWidth          | user can pass different width of the drawer           | 500px, 50%    |
| direction            | user can force drawer to open from a direction        | none          |

### Storybook

[link to storybook](https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=6284%3A111583&t=cfW1Ey6x3G447Hij-0 'drawer')
