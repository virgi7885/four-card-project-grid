import Card from "./Card"

import IconSupervisor from "../assets/images/icon-supervisor.svg"
import IconTeamBuilder from "../assets/images/icon-team-builder.svg"
import IconKarma from "../assets/images/icon-karma.svg"
import IconCalculator from "../assets/images/icon-calculator.svg"

function CardContainer() {

  const services = [
    {
      id: 1,
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      img: IconSupervisor,
      color: `bg-Cyan`
    },
    {
      id: 2,
      title: "Team Builder",
      description: "Scans our talent network to create the optimal team for your project",
      img: IconTeamBuilder,
      color: `bg-Red`
    },
    {
      id: 3,
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      img: IconKarma,
      color: `bg-Orange`
    },
    {
      id: 4,
      title: "Calculator",
      description: "Uses data from past projects to provide better delivery estimates",
      img: IconCalculator,
      color: `bg-Blue`
    },
  ]

  return (
      <section className="grid grid-cols-1 gap-y-8 xl:grid-cols-[repeat(3,minmax(0,338px))] xl:justify-center"> 
        <div className="xl:flex xl:flex-col xl:justify-center xl:items-center">      
        <Card {...services[0]} />
        </div>
        <div className="flex flex-col gap-y-8 xl:flex xl:flex-col xl:gap-y-8 xl:items-center">
        <Card {...services[1]}/>        
        <Card {...services[2]}/>
        </div>
        <div className="xl:flex xl:flex-col xl:justify-center xl:items-center">
        <Card {...services[3]}/>
        </div>
      </section>
  )
}

export default CardContainer











