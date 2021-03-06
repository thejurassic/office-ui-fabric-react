import * as React from 'react';

import { ComponentPage, ExampleCard, IComponentDemoPageProps, PropertiesTableSet } from '@uifabric/example-app-base';

import { LegendOverflowExample } from './examples/LegendsOverflowExample';
import { LegendBasicExample } from './examples/LegendsBasicExample';

const LegendsOverflowExampleCode = require('!raw-loader!@uifabric/charting/src/components/Legends/examples/LegendsOverflowExample.tsx') as string;
const LegendsBasicExampleCode = require('!raw-loader!@uifabric/charting/src/components/Legends/examples/LegendsBasicExample.tsx') as string;

export class LegendsPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Legends"
        componentName="Legends"
        exampleCards={
          <div>
            <ExampleCard title="Legends with overflow" code={LegendsOverflowExampleCode}>
              <LegendOverflowExample />
            </ExampleCard>

            <ExampleCard title="Legends with no overflow" code={LegendsBasicExampleCode}>
              <LegendBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/charting/src/components/Legends/Legends.types.ts')]}
            renderOnly={['ILegendsProps', 'ILegend', 'ILegendsStyles']}
          />
        }
        overview={
          <div>
            <p>
              The legends wrap based upon the space available for them. If there is not enough space to show all legends
              on a single line, the legends fall into a overfow menu. Text appears indicating the number of legends in
              the overflow menu. The legneds are selectable and action to be performed upon clicking a certain legend
              can be passed.
            </p>
          </div>
        }
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
      />
    );
  }
}
