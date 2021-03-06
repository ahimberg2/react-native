/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import * as TurboModuleRegistry from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  +getBool: () => ?boolean;
  +getNumber: () => ?number;
  +getString: () => ?string;
  +getArray: () => ?Array<any>;
  +getObject: () => ?Object;
  +getValueWithPromise: () => ?Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');
