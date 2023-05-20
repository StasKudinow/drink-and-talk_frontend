import Button from './Button'

function Promo({ loggedIn, onPopupOpen}) {

  let promoButton

  if (loggedIn) {
    promoButton =
      <Button
        text="Начать видеосвязь"
        variant="black-button"
        handler="link"
        type="button"
        url="/categories"
      />
  } else {
    promoButton =
      <Button
        text="Начать видеосвязь"
        variant="black-button"
        handler="open-popup"
        type="button"
        onPopupOpen={onPopupOpen}
      />
  }

  return (
    <section className="container mx-auto px-10 pt-10 flex flex-raw justify-between relative">
      <div className="w-185 h-119 bg-dots_1 bg-cover absolute top-13 left-9" />
      <div className="max-w-111 flex flex-col mb-58 ml-23">
        <h1 className="-mb-3 font-normal text-h1-web leading-172 text-black">
          Drink
          <div className="mb-9 flex flex-raw pl-32 gap-5">
            <span className="-mt-3 text-110 leading-126">
              and
            </span>
            <span className="-mt-4 text-120 leading-138 text-white text-stroke">
              Talk
            </span>
          </div>
        </h1>
        <h3 className="w-96 mb-6 font-normal text-h3-web leading-8 text-black ">
          Сервис для общения по видео-связи и душевных
          разговоров
        </h3>
        {promoButton}
      </div>
      <div className="w-108 h-128 mb-32 bg-main_img bg-cover absolute top-6 right-14" />
    </section>
  )
}

export default Promo
