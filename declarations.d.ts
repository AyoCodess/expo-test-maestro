// used so we can import svg files and use them as react components with typescript
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.module.css';

import 'react-native';

declare module '*.css';

// custom types for nativewind
declare namespace JSX {
  interface IntrinsicAttributes {
    className?: string;
    tw?: string;
  }
}

declare module 'react-native' {
  interface FlatListProps<ItemT> extends VirtualizedListProps<ItemT> {
    className?: string;
    tw?: string;
  }

  interface ImagePropsBase {
    className?: string;
    tw?: string;
  }

  interface ViewProps {
    className?: string;
    tw?: string;
  }

  interface TextProps {
    className?: string;
    tw?: string;
  }

  interface SwitchProps {
    className?: string;
    tw?: string;
  }

  interface InputAccessoryViewProps {
    className?: string;
    tw?: string;
  }

  interface TouchableWithoutFeedbackProps {
    className?: string;
    tw?: string;
  }
}
