# GenericLink and LinkProvider

_LinkProvider_ provides Context (Context API) which enables its children to access `next/link` via GenericLink.

_GenericLink_ uses LinkProvider Context and behaves as `next/link`; if Context is not available and user application running outside LinkProvider Context then GenericLink fallBack to anchor tag HTML element.

### Inclusion

#### NextJS application

Link will be passed in value attibute.

```ts
import Link from 'next/link';
import { LinkProvider } from '@nextgen-web-framework/all';

function NextJSApplication() {
  return <LinkProvider element={Link}>// application wrapped</LinkProvider>;
}
```

#### React application

```ts
import { GenericLink } from "@nextgen-web-framework/all";

function ReactApplication(){
return(
    <GenericLink href="/link">
)
}
```

Note: GenericLink takes all properties and attributes of Link(Next JS) and anchor tag.
addtional props to customize GenericLink behaviour are listed below.

### Props

| Name        | Description                                                        | Default value | Variable | Option      |
| ----------- | ------------------------------------------------------------------ | ------------- | -------- | ----------- |
| forceNative | boolean used when anchor tag need to be used in NextJS application | false         | ---      | true, false |

### Storybook

[link to storybook](https://link_to_storybook)
