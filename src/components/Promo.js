import mainImage from "../images/main-image.png";

function Promo() {

  return (
    <section className="container mx-auto px-[52.5px] pt-[14px] pb-[100px] flex flex-raw justify-between">
      <div className="max-w-[553px] flex flex-col pt-[107px] ml-[115px]">
        <h1 className="mb-[-13px] font-normal text-h1-web leading-[172px] text-black">Drink</h1>
        <div className="mb-[35px] flex flex-raw pl-[160px] gap-[26px]">
          <p className="font-normal text-[110px] leading-[126px] text-black">and</p>
          <p className="mt-[-6px] font-normal text-[120px] leading-[138px] text-black">Talk</p>
        </div>
        <h3 className="max-w-[478px] mb-[30px] font-normal text-h3-web leading-[34px] text-black ">Сервис для общения по видео-связи и душевных разговоров</h3>
        <button className="w-[352px] h-[76px] rounded-default bg-black font-normal text-h3-web leading-[34px] text-white" type="button">Начать видео - связь</button>
      </div>
      <img src={mainImage} alt="main" />
    </section>
  );
}

export default Promo;
