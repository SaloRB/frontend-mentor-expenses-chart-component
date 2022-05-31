function Header() {
  return (
    <div className="p-5 rounded-lg min-w-[375px] flex justify-between bg-soft-red text-very-pale-orange">
      <div>
        <p>My balance</p>
        <h2 className="text-2xl font-bold">$921.48</h2>
      </div>
      <img src="/images/logo.svg" />
    </div>
  )
}

export default Header
