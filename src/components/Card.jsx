function Card ({title, description, img, color}) {

  return (
    <div className="shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)] rounded-sm p-6 h-[222px] relative overflow-hidden max-w-[308px]">
        <div className={`${color} h-1 w-full absolute top-0 left-0`}></div>
        <h2 className="font-semibold text-[1.25rem]">{title}</h2>
        <p className="text-Grey-400 text-[.8125rem]">{description}</p>
        <img className="absolute bottom-6 right-10" src={img} alt="icon"/>
    </div>
  )
}

export default Card