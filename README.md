```
import { DropDown } from '@kocierik/dropdown-menu';

const App = () => {
  const list = ['a', 'b', 'c', 'd']
  const [filter, setFilter] = React.useState([])
  return (
    <div className='flex flex-1 p-5'>
      <div>
        <DropDown label={'label'} list={list} filter={filter} setFilter={setFilter} />
      </div>
      <div className='p-5 flex-row flex'>
        {filter.map((item, index) => {
          return <div key={index} className='p-5'>{item}</div>;
        })
        }
      </div>
    </div>
  );
};
```



```
import { Setting } from '@kocierik/dropdown-menu';
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
    <div className='flex flex-1 p-5'>
      <Setting settings={setting} />
    </div>
  );
};
```