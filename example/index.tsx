import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropDown, Setting } from '@kocierik/dropdown-menu';

interface Isetting {
  label: string;
  handler: (...args: string[]) => void;
}

const App = () => {
  const setting: Isetting[] = [{
    label: 'helper',
    handler: () => {
      alert('help!')
    }
  }, {
    label: 'Click me',
    handler: () => {
      alert('clicked!')
    }
  }
  ]
  return (
    <div className='flex flex-1 p-5 justify-center'>
      <Setting settings={setting} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
