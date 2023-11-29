import './App.css'
import { BasicTable } from '../src/'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return [ name, calories, fat, carbs, protein ];
}

const rows = [
  {
    data:createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  },
  {
    data:createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  },
  {
    data:createData("Eclair", 262, 16.0, 24, 6.0),
  },
  {
    data:createData("Cupcake", 305, 3.7, 67, 4.3),
  },
  {
    data:createData("Gingerbread", 356, 16.0, 49, 3.9),
  }
];

const columns = [
  {
   label:"Dessert (100g serving)",
  },
  {
   label:"Calories",
  },
  {
   label:"Fat (g)",
  },
  {
   label:"Carbs (g)",
  },
  {
   label:"Protein (g)"
  }
]

function App() {
  
  return (
    <div>
      <h3>Componente</h3>
      <BasicTable columns={columns} data={rows} />

    </div>
  )
}

export default App