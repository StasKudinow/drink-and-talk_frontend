import mainImage from "../images/main-image.png"

import Button from "./Button"

function Promo() {

  return (
    <section className="container mx-auto px-[52.5px] pt-[14px] pb-20 flex flex-raw justify-between relative">
      <div className="w-[914px] h-[587.5px] bg-dots_1 bg-cover absolute top-[148px] left-[52px]" />
      <div className="max-w-[553px] flex flex-col pt-[107px] ml-23">
        <h1 className="mb-[-13px] font-normal text-h1-web leading-[172px] text-black">
          Drink
          <div className="mb-9 flex flex-raw pl-32 gap-[26px]">
            <span className="mt-[-14px] text-[110px] leading-[126px]">and</span>
            <span className="mt-[-19px] text-[120px] leading-[138px] text-white text-stroke">Talk</span>
          </div>
        </h1>
        <h3 className="max-w-[478px] mb-6 font-normal text-h3-web leading-[34px] text-black ">Сервис для общения по видео-связи и душевных разговоров</h3>
        <Button text="Начать видео - связь" />
      </div>
      <img src={mainImage} alt="main" />
    </section>
  )
}

export default Promo
