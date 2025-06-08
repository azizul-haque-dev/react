import React from 'react'
import Header from "./Components/header/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";

function Page() {
  return (
    <div className="grid place-items-center h-screen">
            <Header />
            <main>
              {/* Begin Weather */}
              <section className="mt-20">
                <WeatherBoard />
              </section>
              {/* End Weather */}
            </main>
          </div>
  )
}

export default Page