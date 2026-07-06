import { Card } from "./Components/Card"


function App() {
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card 
        image={'/profile1.jpg'}
        title={'Nature View'}
        description={'A clean reusable React card component styled with TailwindCSS'}
        buttonText={'Explore'}
      />
    </div>
  )
}

export default App
