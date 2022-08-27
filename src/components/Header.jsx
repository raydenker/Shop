function Header() {
  return (
    <header className="App-header  p-4 bg-blue-800">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="https://raydenker.github.io/Shop/" className="flex items-center Header-logo text-white">
            <span className="material-symbols-outlined ">store</span>
            React Shop
          </a>        
        </div>
      </div>
    </header>
  )
}
export { Header }
