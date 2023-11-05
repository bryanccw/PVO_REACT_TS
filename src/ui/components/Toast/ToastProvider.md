# Toast Provider for Notifications

This provider is exported to make use of hooks to show notification in our app.

The architectural decisions for the Notifications approach can be found [here](https://amwaycloud.atlassian.net/wiki/spaces/NEX/pages/edit-v2/142936494?draftShareId=90164fdf-ada4-48c9-aa83-2033450e8328)

## Introduction

Toast Provider gives us freedom to provide custom notification function to make use of hooks to show notification globally..

## Installation

Toast Provider is exported from @nextgen-web-framework/all

```
yarn add @nextgen-web-framework/all
```

## What is Exported

Toast Provider - It exports a Toast Provider which has one optional attribute for addToast Function.

useToast - Also exported useToast hook to provide addToast and deleteToast.

## Usage

```ts
import { ToastProvider } from '@nextgen-web-framework/all';
```

Use ToastProvider to wrap the whole app and make use of useToast hook anywhere in the app.

## How to use: Below is the example to show usage of useToast with help of Toast Provider -

```ts
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastProvider } from '@nextgen-web-framework/all';

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <ToastProvider>
      <Component {...props.pageProps} />
    </ToastProvider>
  );
};

export default MyApp;
```

How to use useToast hook in components -

```ts
import React, { useEffect } from 'react';
import { useToast } from '@nextgen-web-framework/all';

const Home = () => {
  const { addToast } = useToast();
  return (
    <div>
      <button
        onClick={() => {
          item.addToast({
            id: 'IDD',
            content: <>Notification</>,
            topPosition: '20px',
          });
        }}
      >
        Show Notification
      </button>
    </div>
  );
};

export default Home;
```
