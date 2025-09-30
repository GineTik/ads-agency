export function Steps() {
  return <section className="bg-primary-bg py-20 flex flex-col items-center space-y-8">
    <div>
      <h2 className="text-center">Етапи роботи</h2>
      <h2 className="text-center text-muted-foreground">Легко. Швидко. Ефективно.</h2>
    </div>
    <StepCard />
    <StepCard />
    <StepCard />
    <StepCard />
  </section>
}

function StepCard() { 
  return <div className="bg-white p-3 rounded-lg max-w-[800px] w-full min-h-[300px]">
    <div className="flex gap-2 items-center">
      <div className="bg-gray-100 rounded-md size-[55px] font-bold text-xl flex items-center justify-center">1</div>
      <h3>Консультація та брифування</h3>
    </div>
  </div>
}
